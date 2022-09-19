<script setup lang="ts">
import { useHallService } from '../services/hallService';

const hallService = useHallService();

hallService.getAll();
</script>

<template>
  <div class="flex justify-between items-center pb-16">
    <h1 class="text-[48px] font-semibold">Salles</h1>
    <button class="px-4 py-3 bg-neutral-800 border-2 border-neutral-800 rounded-[8px] tracking-wide">Ajouter une salle</button>
  </div>
  <ul class="grid grid-cols-3 gap-8">
    <li
      v-for="hall in hallService.halls"
      class="bg-neutral-800 rounded-[8px] overflow-hidden"
    >
      <figure>
        <div class="aspect-video bg-neutral-700"></div>
        <figcaption class="px-4 py-3">
          <h2>{{ hall.name }}</h2>
          <p class="text-neutral-500">{{ hall.address }}</p>
        </figcaption>
      </figure>
    </li>
  </ul>
</template>