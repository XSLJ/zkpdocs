<!--
 * @Author: zhangkaipeng
 * @LastEditTime: 2022-12-02 16:30:46
 * @LastEditors: 章凯鹏
 * @Description:
-->

## 1. javaScript学习网站
<script setup>
    import { jsNavs,jsResource } from './navs/javaScript'
    import { typeScript } from './navs/typeScript'
</script>

<CardList :cardList="jsNavs"/>

## 2. js资源,插件
<CardList :cardList="jsResource"/>

## 3. TypeScript
<CardList :cardList="typeScript"/>

