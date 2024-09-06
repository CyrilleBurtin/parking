<script setup lang="ts">
import { ref } from 'vue';
import { useParkingLots } from '@/stores/parkingLots';
import { getAvailableLot } from '../utils/availableLots';
import ActionCard from './ActionCard.vue';

const { releaseLots, lots } = useParkingLots();
const ticketNumber = ref<number | null>(null);
const ticketError = ref(false);
const successMessage = ref(false);

const validateTicketNumber = (ticket: number | null) =>
  !(ticket === null || ticket < 1 || ticket > 10);

const returnTicket = () => {
  if (!validateTicketNumber(ticketNumber.value)) {
    ticketError.value = true;
    return;
  }

  const availableLots = getAvailableLot(lots);
  const arrayIndex = ticketNumber.value ?? -1;

  if (!availableLots.includes(arrayIndex)) {
    releaseLots(arrayIndex);
    resetForm(true);
  } else {
    resetForm(false);
  }
};

const resetForm = (success: boolean) => {
  ticketNumber.value = null;
  ticketError.value = !success;
  successMessage.value = success;

  if (success) {
    setTimeout(() => {
      successMessage.value = false;
    }, 2000);
  }
};
</script>

<template>
  <ActionCard>
    <template #title>
      <h2>Sortie du parking</h2>
    </template>
    <template #action>
      <p>Entrez votre numéro de place pour sortir</p>
      <input
        type="number"
        v-model="ticketNumber"
        min="1"
        max="10"
        id="number-input"
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </template>
    <template #button>
      <button
        @click="returnTicket"
        :disabled="!ticketNumber"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-500"
      >
        exit parking
      </button>
    </template>
    <template #info v-if="successMessage"> La barrière va s'ouvrir </template>
    <template #warning v-if="ticketError">
      Le numéro de ticket entré est incorrect ! Vous devez entrer le numéro d'une place occupée
    </template>
  </ActionCard>
</template>
