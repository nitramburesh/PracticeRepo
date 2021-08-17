function wordsToMarks(string){
  const word = string;
  const letterArr = word.split("");
  const value = 0;
  const charOffset = 96;

  letterArr.map((element) => {
    const letterNum = 0;
    letterNum = element.charCodeAt(0) - charOffset;
    value += letterNum;
  })
  return value;
}