import { defineStore as useService } from 'pinia';
import { ref } from 'vue';
import { CATEGORIES } from '../mocks/categories';
import type { Category } from '../interfaces/category';

export const useCategoryService = useService('category', () => {
  const categories = ref<Category[]>([]);

  function getAll(): void {
    setTimeout(() => categories.value = CATEGORIES, 500);
  }

  return { categories, getAll }
});