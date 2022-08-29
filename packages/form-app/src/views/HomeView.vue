<template>
<div id="page">
  <FormProvider v-if="schemadata.data" :form="form">
  <!-- <FormProvider :form="form"> -->
    <el-button class="goBack" @click="goBack()">返回</el-button>
    <FormLayout v-bind="schemadata.data.form">
      <SchemaField  :schema="schemadata.data.schema" />
    </FormLayout>
    <FormConsumer v-if="isTemplate">
      <template #default="{ form }">
        <el-button type="primary" @click="form.submit" >按钮</el-button>
      </template>
    </FormConsumer>
  </FormProvider>
</div>
</template>

<script lang="ts" setup>
import { onBeforeMount,reactive,ref } from "vue"
import { Input, FormItem, FormLayout,TimePicker} from "@formily/element-plus";
import {
  createForm,
  onFormSubmit,
  onFormValidateFailed,
  onFormValidateStart,
} from "@formily/core";
import { ElMessage,ElButton  } from "element-plus";
import { FormProvider, createSchemaField, FormConsumer } from "@formily/vue";
import { getFormSchema, getData, Initialize } from "../api/getSchema.js"
import { useRoute,useRouter } from "vue-router"

// 拿到route实例
const route = useRoute()
const router = useRouter()

console.log('11111111111111111');

const goBack = ()=>{
 router.go(-1)
}
// 判断是否是预览模式
const isTemplate = ref(true)

if(!route.query.formId){
  isTemplate.value = false
}else{
  isTemplate.value = true
}
// 获取对应 落地页 code值
const pageId = route.query.formId || route.query.templateId

// 初始化 schema 数据
const schemadata = reactive({
  code:"",
  Message:"",
  data:{schema:{},form:{}}
})

// 判断是否要触发提交
const bolen = ref(true)

// 表单提交/验证钩子
const useEffects = () => {
  onFormValidateStart(() => {
    bolen.value = true;
    console.log(form.values, "开始提交")
  });
  onFormValidateFailed(() => {
    console.log(form.errors)
    ElMessage({
      message:"内容输入有误，请修改后重试",
      type: 'error',
    })
    console.log(form.values, "失败了");
    bolen.value = false;
  });
  onFormSubmit(async ()=>{
    if (bolen.value) {
      const resule = await Initialize(pageId,form.values)
      if(resule.code === '200'){
        ElMessage({
            message: '提交成功',
            type: 'success',
          })
      }
    }
  });
};

// 创建表单
const form = createForm({ effects: useEffects });

// 新建 schemaField 实例
const { SchemaField } = createSchemaField({
  components: {
    // ...Plus
    Input,
    FormItem,
    TimePicker
  },
});

onBeforeMount(async ()=>{  
  // 表单初始值
  // TODO 接口待定
  form.values = (await getData(pageId)).data
  // 获取 schema
  console.log('正在请求 code = ',pageId,"的页面");
  schemadata.data = (await getFormSchema(pageId)).data
  console.log(schemadata.data);
  
})

</script>

<style lang="scss" scoped>
// #page{
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   // justify-content: center;
//   .goBack{
//     align-self: flex-end;
//   }
//   .el-button--primary{
//     width: 200px;
//   }
// }

</style>