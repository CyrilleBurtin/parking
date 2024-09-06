<script setup lang="ts">
import { ref } from 'vue';
import { useParkingLots } from '@/stores/parkingLots';

const { removeLots } = useParkingLots();
const assignatedLotsNumber = ref();

const getTicket = () => {
  assignatedLotsNumber.value = removeLots();
};
</script>

<template>
  <div>
    <h1>Veuillez prendre un ticket pour enter dans le parking</h1>
    <button
      @click="getTicket"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      get ticket
    </button>
    <div v-if="assignatedLotsNumber">
      Votre numéro de place attribuée est le {{ assignatedLotsNumber }}
    </div>
  </div>
</template>
