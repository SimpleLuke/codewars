function nthChar(words){
    let word = '';
     for(let i=0;i<words.length;i++){
       word += words[i][i];
     }
     return word;
   }