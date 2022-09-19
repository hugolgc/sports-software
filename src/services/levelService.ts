import { defineStore as useService } from 'pinia';
import { ref } from 'vue';
import { LEVELS } from '../mocks/levels';
import type { Level } from '../interfaces/level';

export const useLevelService = useService('level', () => {
  const levels = ref<Level[]>([]);

  function getAll(): void {
    setTimeout(() => levels.value = LEVELS, 500);
  }

  return { levels, getAll }
});