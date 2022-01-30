//Sice Math.abs() return a positive number:
function makeNegative(num){
    return -Math.abs(num); 
    //However, it may occur -0.
}

// conditional version will not return a negative zero.
function makeNegative(num) {
    return num>0?-num:num;
  }

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));