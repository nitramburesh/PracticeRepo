function wordsToMarks(string){
  var word = string;
  var letterArr = word.split("");
  var value = 0;
  var letterNum = 0;
  for( var element of letterArr){
    letterNum = element.charCodeAt(0) - 96;
    value += letterNum;
  }
  return value;
}