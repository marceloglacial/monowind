<script setup lang="ts">
import { HeroStyles } from "@monowind/styles-library";
defineProps<{ msg: string }>();
</script>

<template>
  <div :class="HeroStyles.container">
    <h1 :class="HeroStyles.title">{{ msg }}</h1>
  </div>
</template>

<style scoped></style>
