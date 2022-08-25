import axios from "axios";
import { Toast, Dialog, Notify } from "vant";
import { isJSON } from "@/utils";
import { isArray } from "lodash";
import store from "@/store";
import {
  getToken,
  getPerDeptId,
  getTokenHead,
  getPerRoleId,
} from "@/utils/auth";
import errorCode from "@/utils/errorCode";
axios.defaults.headers["Content-Type"] = "application/json";
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 800000,
});
// 是否正在请求刷新token接口的标记
// let isRefreshing = false
// 请求队列
// let refreshSubscribers = []
/*push所有请求到数组中*/
// function subscribeTokenRefresh(cb) {
//     refreshSubscribers.push(cb)
// console.log(refreshSubscribers)
// }
// function onRrefreshed() {
//     refreshSubscribers.map(item => {
//         return axios.request(item)
//     })
// }
// request拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    if (getToken() && !isToken && getTokenHead()) {
      config.headers["Authorization"] = getTokenHead() + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
      config.headers["perm-dept-id"] = getPerDeptId();
      config.headers["perm-role-id"] = getPerRoleId();
    }
    // get请求映射params参数
    if (config.method === "get" && config.params) {
      let url = config.url + "?";
      for (const propName of Object.keys(config.params)) {
        const value = config.params[propName];
        var part = encodeURIComponent(propName) + "=";
        if (value !== null && typeof value !== "undefined") {
          if (typeof value === "object") {
            for (const key of Object.keys(value)) {
              if (value[key] !== null && typeof value[key] !== "undefined") {
                const params = propName + "[" + key + "]";
                const subPart = encodeURIComponent(params) + "=";
                url += subPart + encodeURIComponent(value[key]) + "&";
              }
            }
          } else {
            url += part + encodeURIComponent(value) + "&";
          }
        }
      }
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/**
 * 服务端报500,不弹Toast
 */
const code500noToastArr = ["/auth/login"];

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const {
      data: { code = 200, msg, message } = {},
      config: { url },
    } = res;
    // 获取错误信息
    const errorMsg = errorCode[code] || res.data.msg || errorCode["default"];
    if (code == 403) {
      Dialog.confirm({
        title: "系统提示",
        message: "登录状态已过期，请重新登录",
        showCancelButton: false,
        confirmButtonColor: "#009aea",
      }).then(() => {
        store.dispatch("LogOut").then(() => {
          location.href = "/login?visible=true";
        });
      });
      return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
    } else if (code === 500) {
      if (!code500noToastArr.includes(url)) {
        Toast.fail(msg || message || errorMsg);
      }
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      Notify({
        message: msg || message || errorMsg,
        type: "danger",
      });
      return Promise.reject("error");
    } else {
      return res.data;
    }
  },
  (error) => {
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (
      message.includes("Request failed with status code") &&
      error?.response?.data?.message
    ) {
      let jsonObj = "";
      try {
        jsonObj = JSON.parse(error?.response?.data?.message);
      } catch (e) {
        jsonObj = "";
      }
      let msg = "";
      if (isArray(jsonObj)) {
        msg = jsonObj?.[0]?.errMsg;
      } else {
        msg = error?.response?.data?.message;
      }
      message = msg || `系统接口${message.substr(message.length - 3)}异常`;
    }
    if (isJSON(message)) {
      const msgObj = JSON.parse(message);
      const fullMsg = [msgObj]
        .flat()
        .map((e) => e.errMsg)
        .join(", ");

      if (fullMsg) {
        Toast.fail(fullMsg);
      }

      return Promise.reject(msgObj);
    }
    Toast.fail(message);
    return Promise.reject(error);
  }
);
export default service;
