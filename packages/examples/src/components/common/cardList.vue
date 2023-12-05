<script setup lang='ts'>
interface IProps {
  cardList: ICard[]
}

defineProps<IProps>()
/* 点击卡片跳转链接 */
const handleJump = (card: ICard) => {
  window.open(card.src)
}
</script>

<script lang="ts">
export default {
  name:'CardList'
}
</script>

<template>
  <div class="cardList p20px">
    <div v-for="card in cardList" :key="card.name" :data-desc="card.desc" class="card" @click="handleJump(card)">
      <p>{{ card.name }}</p>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.cardList{
  @apply flex flex-wrap justify-between gap-20px;
  .card{
    @apply relative fcc h-130px
     bg-slate-100 basis-[48%]
     p-16px  rounded-5px cursor-pointer overflow-hidden
    transition-transform duration-400 dark:bg-[#161618];
    &:hover{
      @apply -translate-y-2px transition duration-300;
      filter: drop-shadow(4px 4px 10px rgba(0,0,0,.5));
    }
    p{
     @apply p-0 m-0 text-[#747bff] dark:text-[#fff];
    }
  }
}
.card::before,
.card::after {
  position: absolute;
  content: "";
  width: 10%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  // font-size: 16px;
  // background-color: #818cf8;
  background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);
  transition: all 0.5s;
}

.card::before {
  top: 0;
  right: 0;
  border-radius: 0 15px 0 100%;
}

.card::after {
  bottom: 0;
  left: 0;
  border-radius: 0 100%  0 15px;
}

.card:hover::before,
.card:hover:after {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: all 0.5s;
}

.card:hover:after {
  content: attr(data-desc);
  opacity: .7;
  color: red;
  padding: 20px;
}
</style>
