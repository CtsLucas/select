/* eslint-disable @typescript-eslint/no-explicit-any */
export const getRandomItens = (arr: any[], count: number) => {
  if (arr) {
    const rands = [];
    while (rands.length < count) {
      const r = Math.floor(Math.random() * arr.length);
      if (rands.indexOf(r) === -1) {
        rands.push(r);
      }
    }
    return rands.map((r) => arr[r]);
  } else {
    return [];
  }
};
