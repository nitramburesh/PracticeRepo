
function multipleOfIndex(array) {
    var multiple = [];
    
      array.forEach((element, index) => {
        if (element % index == 0){
          multiple.push(element);
      }})
      
      return multiple;
    }