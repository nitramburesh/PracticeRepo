function check(a,x){
    var areYouThere = a.find(element => element === x);
    if(areYouThere === undefined)
      return false;
    else 
      return true;
  };