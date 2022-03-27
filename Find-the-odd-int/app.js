function findOdd(A) {
    let index = 0;
    while(index<A.length){
      if(A.filter(el=>el==A[index]).length%2==1){
      return A[index];
      }
      index++;
    }
  }