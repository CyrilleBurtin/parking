import { ref } from 'vue';
import { defineStore } from 'pinia';
import { parkingLotsMock } from '@/utils/parkingLotsMock';
import type { Lots } from '@/interfaces/lots';
import { getAvailableLot } from '@/utils/availableLots';

export const useParkingLots = defineStore('parkingLots', () => {
  const lots = ref<Lots[]>(parkingLotsMock);

  const removeLots = () => {
    const selectedLot = getAvailableLot(lots.value)[0];

    if (selectedLot !== -1 && lots.value[selectedLot]) {
      lots.value[selectedLot].isAvailable = false;
    } else return null;

    return selectedLot;
  };

  const releaseLots = (id: number) => {
    if (id >= 0 && id < lots.value.length) {
      lots.value[id].isAvailable = true;
    } else {
      console.error(`Invalid lot ID: ${id}`);
    }
  };

  return { lots, removeLots, releaseLots };
});
