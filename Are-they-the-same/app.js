//First I return the square root of numbers from array2, then I compare two arrays in string.

function comp(array1, array2){
    if(array1!=null && array2 !=null){
      const sqrtArr = array2.map(el=>Math.sqrt(el));
      return array1.sort((a,b)=>a-b).join()===sqrtArr.sort((a,b)=>a-b).join();
      }
    return false;
    }