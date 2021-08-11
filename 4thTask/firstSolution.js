
function multipleOfIndex(array) {
  var multiple = [];

    array.filter((element, index) => {
      
      if (element % index == 0){
        multiple.push(element);
        
    }})

    return multiple;
  }