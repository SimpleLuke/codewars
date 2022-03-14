function unusedDigits(...num){
    let digits = [0,1,2,3,4,5,6,7,8,9];
    let arr = [...num].join("").split("");
    console.log(arr);
    return digits.filter(el=>arr.indexOf(String(el))==-1).join("");
  }

console.log(unusedDigits(12, 34, 56, 78));