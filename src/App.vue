<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/app.header.vue';
</script>

<template>
  <div class="h-screen flex flex-col divide-y-2 divide-neutral-800">
    <AppHeader />
    <main class="px-8 py-16 overflow-y-auto">
      <RouterView />
    </main>
  </div>
</template>