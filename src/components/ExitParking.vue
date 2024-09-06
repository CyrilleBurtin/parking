<script setup lang="ts">
import { ref } from 'vue';
import { useParkingLots } from '@/stores/parkingLots';
import { getAvailableLot } from '../utils/availableLots';

const { releaseLots, lots } = useParkingLots();
const ticketNumber = ref();
const ticketError = ref(false);

const returnTicket = () => {
  const availableLots = getAvailableLot(lots);
  if (ticketNumber.value < 0 || ticketNumber.value > 9) {
    ticketError.value = true;
  }

  if (!availableLots.includes(ticketNumber.value)) {
    releaseLots(ticketNumber.value);
    ticketNumber.value = null;
  } else {
    ticketError.value = true;
    ticketNumber.value = null;
  }
};
</script>

<template>
  <div>
    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900"
      >Entrez votre numéro de place pour sortir</label
    >
    <input
      type="number"
      v-model="ticketNumber"
      min="0"
      max="9"
      id="number-input"
      aria-describedby="helper-text-explanation"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      required
    />
    <p v-if="ticketError">
      "Le numéro de ticket entré correspond à une place déjà libre. Veuillez ressaisir votre numéro
      de place."
    </p>
    <button
      @click="returnTicket"
      :disabled="!ticketNumber"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-500"
    >
      exit parking
    </button>
  </div>
</template>
