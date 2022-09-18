<script setup lang="ts">
import { RouterLink } from 'vue-router';

const categories = [
  { name: 'Simple Homme' },
  { name: 'Simple Dame' },
  { name: 'Double Hommes' },
  { name: 'Double Dames' },
  { name: 'Double Mixte' }
];

const levels = [
  { sign: 'N2 N3' },
  { sign: 'R4 R5' },
  { sign: 'R6 D7' },
  { sign: 'D8 D9' },
  { sign: 'P10 - NC' }
];
</script>

<template>
  <h1 class="pb-16 text-[48px] font-semibold">Tableaux</h1>
  <ul class="flex space-x-8">
    <li
      v-for="category in categories"
      class="flex-1 space-y-2"
    >
      <h2 class="px-4 text-neutral-500">{{ category.name }}</h2>
      <ul class="space-y-2">
        <li
          v-for="level in levels"
          class="px-4 py-3 bg-neutral-800 rounded-[8px] font-mono"
        >
          <RouterLink
            :to="{ name: 'DrawsShow', params: { drawId: 1 }}"
            class="flex justify-between"
          >
            <span>{{ level.sign }}</span>
            <span class="text-green-500">24</span>
          </RouterLink>
        </li>
      </ul>
    </li>
  </ul>
</template>