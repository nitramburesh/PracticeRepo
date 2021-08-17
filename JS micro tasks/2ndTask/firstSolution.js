var humanYearsCatYearsDogYears = function(humanYears) {
  
    var humanYears;
    
    function toCatYears(humanYears){
      if (humanYears === 1)
        return 15
      else if (humanYears === 2)
        return 24
      else if (humanYears > 2){
        return (24 + (humanYears-2)*4)
      }
    }
        
        function toDogYears(humanYears){
      if (humanYears === 1)
        return 15
      else if (humanYears === 2)
        return 24
      else if (humanYears > 2){
        return (24 + (humanYears-2)*5)
      }
    } 
        
    var dogYears = toDogYears(humanYears);
    var catYears = toCatYears(humanYears);
  
    return [humanYears, catYears, dogYears]
  }
  
  
