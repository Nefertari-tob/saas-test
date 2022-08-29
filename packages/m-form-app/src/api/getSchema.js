import request from "../utils/request.js";

export function getFormSchema(pageId) {
  return request({
    url: `/page/${pageId}`,
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

export function Initialize(pageId,dataValue) {
  return request({
    url: "/data/save",
    method: "post",
    params: {
      pageId,
      data:dataValue
    },
  });
}