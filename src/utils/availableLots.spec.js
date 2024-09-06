import { describe, it, expect } from 'vitest';
import { parkingLotsMock } from './parkingLotsMock';
import { getAvailableLot } from './availableLots';

describe('availableLots', () => {
  it('should return array with all lots avaialbale', () => {
    expect(getAvailableLot(parkingLotsMock).length).toEqual(10);
  });

  it('should return array with length of 9 and 5 should noty be included', () => {
    parkingLotsMock[5].isAvailable = false;

    const availableLots = getAvailableLot(parkingLotsMock);

    expect(availableLots.length).toEqual(9);
    expect(availableLots.includes(5)).toEqual(false);
  });
});
