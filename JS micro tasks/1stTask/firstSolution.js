function wordsToMarks(string){
    var word = string;
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var letterArr = word.split("");
    var value = 0;
    var letterNum = 0;
    
    letterArr.map((element) => {
        letterNum = element.charCodeAt(0) - 96;
        value += letterNum;
      })
      
    
     return value;
  }