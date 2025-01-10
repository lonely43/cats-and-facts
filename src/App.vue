<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import TitleComp from './components/TitleComp.vue';

</script>

<template>
  <Navigation/>

  <main>
    <TitleComp/>
  </main>
</template>

<style lang="scss" scoped>
  main{
    width: 100%;

    padding-top: 2rem;

    .content{
      max-width: var(--bound);
      width: 100%;
      background-color: aqua;
    }
  }
</style>
