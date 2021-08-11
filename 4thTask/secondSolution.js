
// for..of loop seems to find first element, that passes condition => doesn't return proper index if you have two same numbers in array

function multipleOfIndex(array) {
    var multiple = [];
    
      for(var element of array){
        if (element % array.indexOf(element) == 0){
          multiple.push(element);
      }
      }
      return multiple;
    }