import request from "../utils/request";

export function getFormSchema(pageId) {
  return request({
    url: `/form-schema/${pageId}`,
    method: "GET",
  });
}

export function getData(code) {
  return request({
    url: "/schema-data",
    method: "GET",
    params: {
      code,
    },
  });
}

export function Initialize(param) {
  return request({
    url: "/Initialize",
    method: "post",
    params: {
      param,
    },
  });
}