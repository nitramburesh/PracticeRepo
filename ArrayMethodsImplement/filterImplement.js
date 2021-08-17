const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const wannabeFilter = (callbackFn, array) => {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      filteredArray.push(array[i]);
    }
  }
};

wannabeFilter((element) => element > 3, array);
array.filter((element) => element > 3);
