<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useDrawService } from '../services/draw.service';
import { drawHelper } from '../helpers/draw.helper';

const drawService = useDrawService();
const drawsGroupByDisciplineSortByLevel = computed(() =>
  drawHelper.groupByDisciplineSortByLevel(drawService.draws)
);

drawService.getAll();
</script>

<template>
  <div class="flex justify-between items-center pb-16">
    <h1 class="text-[48px] font-semibold">Tableaux</h1>
    <button class="px-4 py-3 bg-neutral-800 border-2 border-neutral-800 rounded-[8px] tracking-wide">Ajouter un tableau</button>
  </div>
  <ul class="flex space-x-8">
    <li
      v-for="draws in drawsGroupByDisciplineSortByLevel"
      class="flex-1 space-y-2"
    >
      <h2 class="px-4 text-neutral-500">{{ draws[0].discipline.name }}</h2>
      <ul class="space-y-2">
        <li
          v-for="draw in draws"
          class="px-4 py-3 bg-neutral-800 rounded-[8px] font-mono"
        >
          <RouterLink
            :to="{ name: 'DrawsShow', params: { drawId: draw.id }}"
            class="flex justify-between"
          >
            <span>{{ draw.levels.map(({ levels_id }) => levels_id.sign).join(' ') }}</span>
            <span class="text-green-500">24</span>
          </RouterLink>
        </li>
      </ul>
    </li>
  </ul>
</template>