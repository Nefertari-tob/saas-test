import axios from "axios";

const server = axios.create({
  baseURL: "/api/mock/20/getScheam",
  timeout: 1000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  transformResponse: [
    function (data) {
      try {
        return JSON.parse(data);
      } catch (_err) {
        return data;
      }
    },
  ],
});

server.interceptors.response.use((res) => {
  const { status, data } = res || {};
  if (status === 200) {
    return data;
  }
  return res;
});

export default server;
