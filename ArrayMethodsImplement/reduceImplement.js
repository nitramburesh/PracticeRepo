const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const wannabeReduced = (reducer, array, init) => {
  let accumulator = init;
  for (let i = 0; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }
  return accumulator;
};
const reduced = wannabeReduced((acc, curr) => acc * curr, array, 1);
