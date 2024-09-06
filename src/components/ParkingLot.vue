<script setup lang="ts">
const { id, isAvailable } = defineProps<{
  id: number;
  isAvailable: boolean;
}>();
</script>

<template>
  <div class="border-2 bg-slate-200 w-24 h-48 flex justify-center items-center rounded-md">
    <p class="font-bold text-2xl" :class="isAvailable ? 'text-green-800' : 'text-rose-800'">
      {{ id + 1 }}
    </p>
  </div>
</template>
