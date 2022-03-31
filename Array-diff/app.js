function arrayDiff(a, b) {
    while(b.length>0){
      a = a.filter(el=>el !=b[0]);
      b.shift();
    }
    return a;
  }

//using includes method
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }