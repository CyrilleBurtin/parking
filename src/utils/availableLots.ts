import { type Lots } from '../interfaces/lots';

export const getAvailableLot = (lots: Lots[]) => {
  const places = lots.reduce<number[]>((acc, curr) => {
    if (curr.isAvailable) {
      acc.push(curr.id);
    }

    const result = acc.sort(() => 0.5 - Math.random());
    return result;
  }, []);

  return places;
};
