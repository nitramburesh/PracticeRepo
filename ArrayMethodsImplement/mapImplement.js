const array = [1, 2, 3, 4, 5, 6];

const map = (callbackFn, array) => {
  const mappedArray = [];

  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callbackFn(array[i], i));
  }

  return mappedArray;
};

const double = array.map((element) => element * 6);

const wannabeDouble = map((element) => element * 6, array);
