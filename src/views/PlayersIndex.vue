<script setup lang="ts">
import { computed, ref } from 'vue';
import { PLAYERS } from '../mocks/players';

const search = ref('');

const playersFilterBySearch = computed(() => PLAYERS.filter(player =>
  player.license.toLowerCase().includes(search.value.toLowerCase()) ||
  player.firstName.toLowerCase().includes(search.value.toLowerCase()) ||
  player.lastName.toLowerCase().includes(search.value.toLowerCase())
));
</script>

<template>
  <div class="flex justify-between items-center pb-16">
    <h1 class="text-[48px] font-semibold">Joueurs</h1>
    <label htmlFor="search">
      <span class="sr-only">Chercher un joueur</span>
      <input
        v-model="search"
        id="search"
        type="text"
        placeholder="Chercher par licence, nom, club"
        class="w-72 px-4 py-3 bg-transparent border-2 border-neutral-800 rounded-[8px] placeholder:text-neutral-500 tracking-wide"
      />
    </label>
  </div>
  <table class="w-full table-auto divide-y-2 divide-neutral-800">
    <thead>
      <tr class="text-left text-neutral-500">
        <th class="pr-4 pb-3 font-normal">Licence</th>
        <th class="px-4 pb-3 font-normal">Nom</th>
        <th class="px-4 pb-3 font-normal">Club</th>
        <th class="px-4 pb-3 font-normal">Tableaux</th>
        <th class="pl-4 pb-3 font-normal">État</th>
      </tr>
    </thead>
    <tbody class="divide-y-2 divide-neutral-800">
      <tr v-for="player in playersFilterBySearch">
        <td class="pr-4 py-3 font-mono">{{ player.license }}</td>
        <td class="px-4 py-3">{{ player.firstName }} {{ player.lastName }}</td>
        <td class="px-4 py-3">Bad. Wambrechie Marquette</td>
        <td class="px-4 py-3">SH R6 - DH D7</td>
        <td class="pl-4 py-3">Présent</td>
      </tr>
    </tbody>
  </table>
</template>