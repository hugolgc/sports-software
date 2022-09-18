import { defineStore as defineService } from 'pinia';
import { ref } from 'vue';
import { HALLS } from '../mocks/halls';
import type { Hall } from '../interfaces/hall';

export const useHallService = defineService('hall', () => {
  const halls = ref<Hall[]>([]);

  function getAll(): void {
    setTimeout(() => halls.value = HALLS, 500);
  }

  return { halls, getAll }
});