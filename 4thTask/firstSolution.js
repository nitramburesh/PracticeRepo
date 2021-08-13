
function multipleOfIndex(array) {

  const multiple = [];
  
   array.map((element, index) => {
      if (element % index == 0){
        multiple.push(element);
    }})
    
  return multiple;
  }