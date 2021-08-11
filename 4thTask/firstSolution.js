function multipleOfIndex(array) {
    var multiple = [];
    for (let i = 0; i < array.length; i++){
      if(array[i] % i == 0){
       multiple.push(array[i]);
      }
    }
      return multiple;
    }