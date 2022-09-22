import { ref } from 'vue';
import { defineStore as useService } from 'pinia';
import { useServer } from '../servers';
import type { Tournament } from '../interfaces/tournament.interface';

export const useTournamentService = useService('tournament', () => {
  const tournaments = ref<Tournament[]>([]);
  const tournamentSelected = ref<Tournament | null>({
    id: 1,
    name: 'Tournoi des Gueules Noires'
  } as Tournament);
  const tournamentServer = useServer('tournaments');

  function getOne(id: number): void {
    tournamentServer.readOne(id)
    .then(data => tournamentSelected.value = data as Tournament)
    .catch(() => console.error('Une erreur est survenue'));
  }

  return { tournaments, tournamentSelected, getOne };
});