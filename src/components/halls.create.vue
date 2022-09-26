<script setup lang="ts">
defineProps(['modelValue']);
defineEmits(['update:modelValue']);

function handleSubmit() {
  console.log('handleSubmit()');
}
</script>

<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 flex"
  >
    <div
      @click="$emit('update:modelValue', false)"
      class="absolute inset-0"
    ></div>
    <form
      @submit.prevent="handleSubmit()"
      class="w-[512px] h-screen z-10 flex flex-col ml-auto p-8 bg-neutral-900 border-l-2 border-neutral-800"
    >
      <div class="flex-none flex justify-between pb-16">
        <h2 class="text-[24px] font-semibold">Ajouter une salle</h2>
        <button
          @click="$emit('update:modelValue', false)"
          type="button"
        >
          <svg class="w-9 h-9 text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="flex flex-col space-y-4">
        <input
          id="name"
          type="text"
          placeholder="Nom"
          class="px-4 py-3 bg-transparent border-2 border-neutral-800 rounded-[8px] placeholder:text-neutral-500 tracking-wide"
        />
        <input
          id="name"
          type="text"
          placeholder="Adresse"
          class="px-4 py-3 bg-transparent border-2 border-neutral-800 rounded-[8px] placeholder:text-neutral-500 tracking-wide"
        />
        <input
          id="name"
          type="number"
          placeholder="Nombre de terrains"
          class="px-4 py-3 bg-transparent border-2 border-neutral-800 rounded-[8px] placeholder:text-neutral-500 tracking-wide"
        />
      </div>
    </form>
  </div>
</template>