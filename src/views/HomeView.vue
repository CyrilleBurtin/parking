<script setup lang="ts">
import { useParkingLots } from '../stores/parkingLots';
import ParkingLot from '../components/ParkingLot.vue';
import GetTicket from '../components/GetTicket.vue';
import ExitParking from '../components/ExitParking.vue';
const { lots } = useParkingLots();
</script>

<template>
  <div class="flex flex-col gap-16">
    <GetTicket :lots="lots" />
    <ExitParking />
    <h2>Place disponibles</h2>
    <br />
    <div class="flex gap-2 flex-wrap">
      <ParkingLot
        v-for="{ isAvailable, id } in lots"
        :key="id"
        :id="id"
        :isAvailable="isAvailable"
      />
    </div>
  </div>
</template>
