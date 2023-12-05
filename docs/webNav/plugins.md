# 一些插件
<script setup>
    import { vuePlugins ,fileOperation ,formPlugins,otherPlugins ,canvasList  ,videoPlugins ,echartsList,scroll ,flow , images , reactPlugins}from './navs/plugins' 
</script>

## 1. vue
::: details 查看列表
<CardList :cardList="vuePlugins"/>
:::

## 2. react
::: details 查看列表
<CardList :cardList="reactPlugins"/>
:::

## 3. 文件操作
::: details 查看列表
<CardList :cardList="fileOperation"/>
:::

## 4. 图片
::: details 查看列表
<CardList :cardList="images"/>
:::

## 5. 滚动
::: details 查看列表
<CardList :cardList="scroll"/>
:::

## 6. 表单和校验
::: details 查看列表
<CardList :cardList="formPlugins"/>
:::

## 7. canvas
::: details 查看列表
<CardList :cardList="canvasList"/>
:::



## 8. 功能向导,视频播放
::: details 查看列表
<CardList :cardList="videoPlugins"/>
:::

## 9. [echarts](https://echarts.apache.org/handbook/zh/get-started/)
- `echarts`[官网](https://echarts.apache.org/handbook/zh/get-started/)和社区

::: details 查看列表
<CardList :cardList="echartsList"/>
:::

## 10. 流程图
<CardList :cardList="flow"/>

## 11. 其他
<CardList :cardList="otherPlugins"/>