<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isDark = ref<boolean>(false);

onMounted(()=>{
   isDark.value = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)? true: false;
   isDark.value = false
})
</script>
<template>
   <img v-if="isDark" src="../../assets/imgs/cat-dark.svg" alt="">
   <img v-if="!isDark" src="../../assets/imgs/cat.svg" alt="">
</template>
<style lang="scss" scoped>

</style>
