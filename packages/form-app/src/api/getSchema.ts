import request from "../utils/request.js";
import { DataValue } from '../utils/type' 
import { LocationQueryValue } from "vue-router";

export function getFormSchema(pageId:LocationQueryValue | LocationQueryValue[]) {
  return request({
    url: `/page/${pageId}`,
    method: "GET",
  });
}

export function getData(code:LocationQueryValue | LocationQueryValue[]) {
  return request({
    url: "/schema-data",
    method: "GET",
    params: {
      code,
    },
  });
}

export function Initialize(pageId:LocationQueryValue | LocationQueryValue[],dataValue:DataValue) {
  return request({
    url: "/data/save",
    method: "post",
    params: {
      pageId,
      data:dataValue
    },
  });
}