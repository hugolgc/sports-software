<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useDrawService } from '../services/draw.service';

const route = useRoute();
const id = parseInt(route.params.drawId as string);
const drawService = useDrawService();

drawService.getOne(id);
</script>

<template>
  <h1
    v-if="drawService.drawSelected"
    class="pb-16 text-[48px] font-semibold"
  >
    {{ drawService.drawSelected.discipline.name }}
    {{ drawService.drawSelected.levels.map(({ levels_id }) => levels_id.sign).join(' / ') }}
  </h1>
</template>