function grow(x){
    var grew = 1;
    for(let i = 0; i < x.length; i++){
      grew *= x[i];
    }
      return grew;
    }