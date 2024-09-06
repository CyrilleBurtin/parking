<script setup lang="ts">
import { ref } from 'vue';
import { useParkingLots } from '@/stores/parkingLots';
import ActionCard from './ActionCard.vue';

const { removeLots } = useParkingLots();
const assignatedLotsNumber = ref<number | null>(null);
const successMessage = ref(false);

const getTicket = () => {
  assignatedLotsNumber.value = removeLots();
  showSuccessMessage();
};

const showSuccessMessage = () => {
  successMessage.value = true;
  setTimeout(() => {
    successMessage.value = false;
  }, 2000);
};
</script>

<template>
  <ActionCard>
    <template #title>
      <h2>Entrée du parking</h2>
    </template>
    <template #action>
      <p>Veuillez prendre un ticket pour entrer dans le parking</p>
    </template>
    <template #button>
      <button
        :disabled="successMessage"
        @click="getTicket"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Prendre un ticket
      </button>
    </template>
    <template #info v-if="successMessage && assignatedLotsNumber !== null">
      <div>Votre place attribuée est la {{ assignatedLotsNumber + 1 }}</div>
    </template>
  </ActionCard>
</template>
