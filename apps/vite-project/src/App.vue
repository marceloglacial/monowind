<script setup lang="ts">
import { PageStyles } from '@monowind/styles-library';
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div :class="PageStyles.container">
    <HelloWorld msg="Monowind" />
  </div>
</template>

<style scoped>

</style>
