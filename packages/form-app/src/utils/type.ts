// 表单数据
export interface DataValue {
  [item:string]:string
}

// 获取schema接口 返回类型
export interface SchemaData {
  code:"",
  Message:"",
  data:Schema
}
interface Schema {
  schema:any,
  form:any
}

// 提交表单值接口 返回类型
export interface SubmitValue {
  code:string
}
