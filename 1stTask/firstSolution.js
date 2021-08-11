function wordsToMarks(string){
    var word = string;
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var letterArr = word.split("");
    var value = 0;
    var letterNum = 0;
    
    for (var letter of letterArr){
    letterNum = alphabet.indexOf(letter) + 1;
    value = letterNum + value;
    }
    
     return value;
  }