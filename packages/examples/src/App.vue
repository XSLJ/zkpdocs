<script setup lang='ts'>
const list: ICard[] = [
  {
    name: '123123123123123123123123123123123123123',
    src: '',
    desc: '888',
  },
  {
    name: '123',
    src: '',
    desc: '888',
  },
  {
    name: '123',
    src: '',
    desc: '888',
  },
]
</script>

<template>
  <div class="">
    <CardList2 :card-list="list" />
  </div>
</template>

<style scoped lang='scss'>
</style>
