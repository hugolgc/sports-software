import { ref } from 'vue';
import { defineStore as useService } from 'pinia';

export const useCategoryService = useService('category', () => {
  const categories = ref<[]>([]);

  function getAll(): void {
    setTimeout(() => categories.value = [], 500);
  }

  return { categories, getAll };
});