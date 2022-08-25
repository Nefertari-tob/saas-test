<template>
  <FormProvider v-if="schemadata.value" :form="form">
    <!-- <FormLayout :form="schemadata.value.form"> -->
      <SchemaField  :schema="schemadata.value.schema" />
    <!-- </FormLayout> -->
      <FormConsumer v-if="isTemplate">
        <template #default="{ form }">
          <el-button type="primary" @click="form.submit" >按钮</el-button>
        </template>
      </FormConsumer>
  </FormProvider>
</template>

<script lang="ts" setup>
import { onBeforeMount,reactive } from "vue"
// import { schema } from "../utils/schema";
// import {Plus} from "../utils/GetComponent.ts"
import { Input, FormItem, FormLayout } from "@formily/element-plus";
import {
  createForm,
  onFormSubmit,
  onFormValidateFailed,
  onFormValidateStart,
} from "@formily/core";
import { observable } from "@formily/reactive";
import { ElMessage,ElButton  } from "element-plus";
import { FormProvider, createSchemaField, FormConsumer } from "@formily/vue";
import { getFormSchema, getData, Initialize } from "../api/getSchema.js"
import { useRoute } from "vue-router"


const isTemplate = observable.ref(true)
// 获取对应 落地页 code值
const pageId = useRoute().query.code

// 初始化 schema 数据
const schemadata = reactive({})

// 判断是否要触发提交
const bolen = observable.ref(true)

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
  onFormSubmit(()=>{
    if (bolen.value) {
      Initialize(form.values).then(res=>{
        if(res.code === '200'){
          ElMessage({
            message: '提交成功',
            type: 'success',
          })
        }
      })
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
    FormLayout
  },
});

onBeforeMount(async ()=>{  
  // 表单初始值
  form.values = (await getData()).data
  // 获取 schema
  console.log('正在请求 code = ',pageId,"的页面");
  schemadata.value = await getFormSchema(pageId)
})

</script>
