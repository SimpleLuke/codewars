function positiveSum(arr){
    return arr.filter(el=>el>0)
    .reduce((acc,cur)=>acc+cur,0);
}

console.log(positiveSum([1,-4,7,12]));
console.log(positiveSum([]));