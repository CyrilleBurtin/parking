<script setup lang="ts">
import { ref } from 'vue';
import { useParkingLots } from '@/stores/parkingLots';
import ActionCard from './ActionCard.vue';
const { removeLots } = useParkingLots();
const assignatedLotsNumber = ref();
const successMessage = ref(false);

const getTicket = () => {
  assignatedLotsNumber.value = removeLots();
  successMessage.value = true;
  setTimeout(() => {
    successMessage.value = false;
  }, 2000);
};
</script>

<template>
  <ActionCard>
    <template #title><h2>Entrée du parking</h2></template>
    <template #action>
      <p>Veuillez prendre un ticket pour enter dans le parking</p>
    </template>
    <template #button>
      <button
        :disabled="successMessage"
        @click="getTicket"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        get ticket
      </button>
    </template>
    <template #info v-if="successMessage && assignatedLotsNumber">
      <div>Votre place attribuée est la {{ assignatedLotsNumber + 1 }}</div>
    </template>
  </ActionCard>
</template>
