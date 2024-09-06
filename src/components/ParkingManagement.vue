<script setup lang="ts">
import ParkingLot from '../components/ParkingLot.vue';
import { useParkingLots } from '../stores/parkingLots';

const { lots } = useParkingLots();
</script>

<template>
  <div class="flex gap-2 flex-wrap max-w-[600px]">
    <ParkingLot v-for="{ isAvailable, id } in lots" :key="id" :id="id" :isAvailable="isAvailable" />
  </div>
</template>
