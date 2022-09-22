import { defineStore as useService } from 'pinia';
import { ref } from 'vue';

export const useLevelService = useService('level', () => {
  const levels = ref<[]>([]);

  function getAll(): void {
    setTimeout(() => levels.value = [], 500);
  }

  return { levels, getAll };
});