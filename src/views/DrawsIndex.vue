<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useCategoryService } from '../services/categoryService';
import { useLevelService } from '../services/levelService';

const categoryService = useCategoryService();
const levelService = useLevelService();

categoryService.getAll();
levelService.getAll();
</script>

<template>
  <div class="flex justify-between items-center pb-16">
    <h1 class="text-[48px] font-semibold">Tableaux</h1>
    <button class="px-4 py-3 bg-neutral-800 border-2 border-neutral-800 rounded-[8px] tracking-wide">Ajouter un tableau</button>
  </div>
  <ul class="flex space-x-8">
    <li
      v-for="category in categoryService.categories"
      class="flex-1 space-y-2"
    >
      <h2 class="px-4 text-neutral-500">{{ category.name }}</h2>
      <ul class="space-y-2">
        <li
          v-for="level in levelService.levels"
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