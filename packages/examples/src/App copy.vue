<script setup lang='ts'>
import { useFormConfig } from './formConfig'
// import FormApp from './components/form/antd/antdForm.vue'
// import FormApp from './components/form/antd/schemaForm'
// import FormApp from './components/form/antd/schemaForm.vue'
// import FormApp from './components/form/element-plus/schemaForm.vue'
// import FormApp from './components/form/element-plus/schemaForm'
import FormApp from './components/form/element-plus/form.vue'
// 表单配置
const { modelData, formShcema } = useFormConfig()
const schemaFormRef = ref()
setTimeout(() => {
  modelData.value = { username: 'zkp' }
  // modelData.value.username = 'zkp'
  console.log('modelData.value', modelData.value)
}, 3000)
</script>

<template>
  <div class="p20 overflow-auto h100vh">
    <FormApp ref="schemaFormRef" :schema="formShcema" :model-data="modelData">
      <template #userInfo="{ item }">
        <h3 class="mb20">{{ item?.attrs?.title }} </h3>
      </template>
      <template #custom="{ item }">
        <h3 class="mb20">{{ item?.formItem?.title }} <b v-if="item.formItem.otherInfo">{{ item.formItem.otherInfo }}</b> </h3>
      </template>
      <template #prefix="{ item }">
        <span v-if="item.formItem.name === 'username'">{{ item.attrs.class }}</span>
      </template>
      <template #suffix="{ item }">
        <span v-if="item.formItem.name === 'password'">给密码框的后缀</span>
      </template>
      <template #age="{ model }">
        {{ model.age }}
      </template>
      <template #default="{ item }">
        <a-button v-if="item.formItem.name === 'fileList'" type="primary">上传一张帅照</a-button>
      </template>
    </FormApp>
  </div>
</template>
