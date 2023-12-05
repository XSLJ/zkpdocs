<!--
 * @Author: zhangkaipeng
 * @LastEditTime: 2022-12-02 16:03:14
 * @LastEditors: 章凯鹏
 * @Description:
-->

# 一些资料

<script setup>
import { resource , books , gitList} from './navs/resource'
</script>

## 1. 静态站点
::: details 查看列表
<CardList :cardList="resource" />
:::


## 2. Books
::: details 查看列表
<CardList :cardList="books" />
:::

## 3. git

<CardList :cardList="gitList" />



