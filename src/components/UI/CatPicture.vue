<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isDark = ref<boolean>(false);

onMounted(()=>{
   isDark.value = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)? true: false;
   isDark.value = false
})
</script>
<template>
   <div class="cat-picture">
      <img v-if="isDark" src="../../assets/imgs/cat-dark.svg" alt="">
      <img v-if="!isDark" src="../../assets/imgs/cat.svg" alt="">
   </div>
</template>
<style lang="scss" scoped>
   .cat-picture{
      width: 100%;

      img{
         width: 100%;
         height: auto;
         
         object-fit: cover;
         display: block;
      }
   }
</style>
