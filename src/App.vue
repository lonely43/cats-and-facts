<script setup lang="ts">
import Navigation from './components/Navigation.vue';

import Hero from './components/blocks/Hero.vue';
import Facts from './components/blocks/Facts.vue';

</script>

<template>
  <Navigation/>

  <main>
    <Hero />
    <Facts/>
  </main>
</template>

<style lang="scss" scoped>
  main{
    width: 100%;

    padding-top: 2rem;
  }
</style>
