function twoSum(numbers, target) {
    let index1, index2;
   for(let i=0; i<numbers.length; i++){
     for(let j=0; j<numbers.length; j++){
       if(numbers[i]+numbers[j]==target&& i!==j){
         index1 = i;
         index2 =j;
       }
     }
   }
   return [index1,index2];
 }