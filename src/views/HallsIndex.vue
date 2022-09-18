<script setup lang="ts">
import { computed, ref } from 'vue';
import { useHallService } from '../services/hallService';

const search = ref('');
const hallService = useHallService();

const hallsFilterBySearch = computed(() => hallService.halls.filter(hall =>
  hall.name.toLowerCase().includes(search.value.toLowerCase()) ||
  hall.address.toLowerCase().includes(search.value.toLowerCase())
));

hallService.getAll();
</script>

<template>
  <div class="flex justify-between items-center pb-16">
    <h1 class="text-[48px] font-semibold">Salles</h1>
    <label htmlFor="search">
      <span class="sr-only">Chercher une salle</span>
      <input
        v-model="search"
        id="search"
        type="text"
        placeholder="Chercher par nom, adresse"
        class="w-72 px-4 py-3 bg-transparent border-2 border-neutral-800 rounded-[8px] placeholder:text-neutral-500 tracking-wide"
      />
    </label>
  </div>
  <ul class="grid grid-cols-3 gap-8">
    <li
      v-for="hall in hallsFilterBySearch"
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