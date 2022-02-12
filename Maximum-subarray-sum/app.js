var maxSequence = function(array){
    let sum = array[0];
    let cur = array[0];

    for(let i=1; i<array.length; i++){
        cur += array[i];
        if(cur <0 || array[i]>cur){
            cur = array[i];
        }
        if(sum<cur){
            sum = cur;
        }
    }
  if(sum<0 || sum == undefined){
    return 0;
  }
    return sum;
}

console.log(maxSequence([-2,1,-3,4,-1,2,1,-5,4]));