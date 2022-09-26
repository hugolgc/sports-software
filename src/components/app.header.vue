<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useClubService } from '@/services/club.service';
import { useTournamentService } from '../services/tournament.service';

const clubService = useClubService();
const tournamentService = useTournamentService();
</script>

<template>
  <header class="px-8 py-4 flex-none">
    <nav class="flex justify-between items-center">
      <p>{{
        tournamentService.tournamentSelected
        ? tournamentService.tournamentSelected.name
        : ''
      }}</p>
      <ul class="flex space-x-4">
        <li>
          <RouterLink
            :to="{ name: 'HallsIndex' }"
            class="block px-4 py-2 hover:bg-neutral-800 rounded-[6px] duration-100"
          >Salles</RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'DrawsIndex' }"
            class="block px-4 py-2 hover:bg-neutral-800 rounded-[6px] duration-100"
          >Tableaux</RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'PlayersIndex' }"
            class="block px-4 py-2 hover:bg-neutral-800 rounded-[6px] duration-100"
          >Joueurs</RouterLink>
        </li>
        <li class="px-4 py-2 hover:bg-neutral-800 rounded-[6px] duration-100">Matchs</li>
        <li class="px-4 py-2 hover:bg-neutral-800 rounded-[6px] duration-100">Préférences</li>
      </ul>
      <p>{{
        clubService.clubSelected
        ? clubService.clubSelected.name
        : ''
      }}</p>
    </nav>
  </header>
</template>