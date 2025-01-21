<script setup lang="ts">
import Navigation from './components/Navigation.vue';

import TitleComp from './components/blocks/TitleComp.vue';
import FactsComp from './components/blocks/FactsComp.vue';

</script>

<template>
  <Navigation/>

  <main>
    <TitleComp/>
    <FactsComp/>
  </main>
</template>

<style lang="scss" scoped>
  main{
    width: 100%;

    padding-top: 2rem;
  }
</style>
