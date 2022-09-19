import { ref, computed } from 'vue';
import { defineStore as useService } from 'pinia';

export const useCounterStore = useService('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment }
})
