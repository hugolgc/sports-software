import { useTournamentService } from './tournament.service';
import { ref } from 'vue';
import { defineStore as useService } from 'pinia';
import { useServer } from '../servers/index';
import { drawFactory } from '../factories/draw.factory';
import type { Draw } from '../interfaces/draw.interface';

export const useDrawService = useService('draw', () => {
  const draws = ref<Draw[]>([]);
  const drawSelected = ref<Draw | null>(null);
  const drawServer = useServer('draws');
  const tournamentService = useTournamentService();

  function getAll(): void {
    if (!tournamentService.tournamentSelected) return;
    const drawsQuery = drawFactory.getAll(tournamentService.tournamentSelected.id);

    drawServer.readByQuery(drawsQuery)
    .then(({ data }) => draws.value = data as Draw[])
    .catch(() => console.error('Une erreur est survenue'));
  }

  function getOne(id: number): void {
    const drawQuery = drawFactory.getOne();
    drawSelected.value = null;

    drawServer.readOne(id, drawQuery)
    .then(data => drawSelected.value = data as Draw)
    .catch(() => console.error('Une erreur est survenue'));
  }

  return { draws, drawSelected, getAll, getOne };
});