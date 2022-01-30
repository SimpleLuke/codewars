function findNextSquare(sq) {
    const rootNum = Math.sqrt(sq); 
    return rootNum%1==0?Math.pow(rootNum+1,2):-1;
  }

  console.log(findNextSquare(121));
  console.log(findNextSquare(625));
  console.log(findNextSquare(114));