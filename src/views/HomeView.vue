<script setup lang="ts">
import { useParkingLots } from '../stores/parkingLots';
import GetTicket from '../components/GetTicket.vue';
import ExitParking from '../components/ExitParking/ExitParking.vue';
import ParkingManagement from '@/components/ParkingManagement.vue';
const { lots } = useParkingLots();
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex content-between flex-wrap gap-12 mb-12">
      <GetTicket :lots="lots" />
      <ExitParking />
    </div>
    <ParkingManagement />
  </div>
</template>
