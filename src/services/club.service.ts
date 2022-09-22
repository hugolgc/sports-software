import { ref } from 'vue';
import { defineStore as useService } from 'pinia';
import { useServer } from '../servers';
import type { Club } from '../interfaces/club.interface';

export const useClubService = useService('club', () => {
  const clubs = ref<Club[]>([]);
  const clubSelected = ref<Club | null>({
    id: 1,
    status: 'published',
    name: 'Bad. Club Hersin Coupigny'
  } as Club);
  const clubServer = useServer('clubs');

  function getOne(id: number): void {
    clubServer.readOne(id)
    .then(data => clubSelected.value = data as Club)
    .catch(() => console.error('Une erreur est survenue'));
  }

  return { clubs, clubSelected, getOne };
});