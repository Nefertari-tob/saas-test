
<template>
<div id="page">
  <FormProvider v-if="schemadata.data" :form="form">
  <!-- <FormProvider :form="form"> -->
    <Button class="goBack" @click="goBack()">返回</Button>
    <FormLayout v-bind="schemadata.data.form">
      <SchemaField  :schema="schemadata.data.schema" />
    </FormLayout>
    <FormConsumer v-if="isTemplate">
      <template #default="{ form }">
        <Button type="primary" @click="form.submit" >按钮</Button>
      </template>
    </FormConsumer>
  </FormProvider>
</div>
</template>


<script lang="ts" setup>
import { onBeforeMount,reactive,ref } from "vue"
// import { schema } from "../utils/schema.js";
import { Input, FormItem, FormLayout } from "@formily/vant3";
import {
  createForm,
  onFormSubmit,
  onFormValidateFailed,
  onFormValidateStart,
} from "@formily/core";
import { Notify, Button } from "vant";
import { FormProvider, createSchemaField, FormConsumer } from "@formily/vue";
import { getFormSchema, getData, Initialize } from "../api/getSchema.js"
import { useRouter,useRoute } from "vue-router"

// 拿到route实例
const router = useRouter()
const route = useRoute()

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
    Notify({
      message:"内容输入有误，请修改后重试",
      type: 'danger',
    })
    console.log(form.values, "失败了");
    bolen.value = false;
  });
  onFormSubmit(async ()=>{
    if (bolen.value) {
      const resule = await Initialize(pageId,form.values)
      if(resule.code === '200'){
        Notify({
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
    FormItem
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

<style scoped lang="less">
// #page{
//   display: flex;
//   flex-direction: column;
//   // align-items: center;
//   // justify-content: center;
//   .goBack{
//     align-self: flex-end;
//   }
//   .van-button--default{
//     width: 60px;
//     margin-top: 5px;
//     margin-right: 10px;
//   }
//   .van-button--primary{
//     align-self: center;
//     width: 200px;
//   }
// }
#page{
  background: aqua;
}
</style>
