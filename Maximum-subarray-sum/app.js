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
 
//another way
function maxSequence2(arr){
    var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

console.log(maxSequence([-2,1,-3,4,-1,2,1,-5,4]));