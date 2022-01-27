function repeatStr (n, string) {
    let output = string;
    while(n>1){
        output = output.concat(string);
        n--;
    }
    return output;
  }

//   Alternate solution

function repeatStr2(n, s){
    return s.repeat(n); //Internet Explorer don't support repeat()method
}