function duplicateCount(text){
    text = text.toLowerCase();
    let newText = text;
    let count = 0;
    for(let i=0; i<text.length;i++){
        let replace = text[i];
        let regex = new RegExp(replace,"g");
        if(newText.length - newText.replace(regex,"").length > 1){
          count++;
          newText = newText.replace(regex,"");
        }
      }
    return count;
  }

  console.log(duplicateCount("abcde"));
  console.log(duplicateCount("aabbcde"));
  console.log(duplicateCount("aabBcde"));
  console.log(duplicateCount("Indivisibilities"));