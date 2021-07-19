function repeat(word,num){

    let newWord ="";
    for (let i=0; i<num; i++){
    newWord = newWord + word;
    }
    return newWord;
  }
  console.log(repeat("abc",3));