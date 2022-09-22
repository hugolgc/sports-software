import { ref } from 'vue';
import { defineStore as useService } from 'pinia';
import { useServer } from '../servers/index';
import { hallFactory } from '../factories/hall.factory';
import { useClubService } from './club.service';
import type { Hall } from '../interfaces/hall.interface';

export const useHallService = useService('hall', () => {
  const halls = ref<Hall[]>([]);
  const hallServer = useServer('halls');
  const clubService = useClubService();

  function getAll(): void {
    if (!clubService.clubSelected) return;
    const hallsQuery = hallFactory.getAll(clubService.clubSelected.id);
    
    hallServer.readByQuery(hallsQuery)
    .then(({ data }) => halls.value = data as Hall[])
    .catch(() => console.error('Une erreur est survenue'));
  }

  return { halls, getAll };
});