<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/header.vue';
</script>

<template>
  <div class="h-screen flex flex-col divide-y-2 divide-neutral-800">
    <Header />
    <main class="px-8 py-16 overflow-y-auto">
      <RouterView />
    </main>
  </div>
</template>