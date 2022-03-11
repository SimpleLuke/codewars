function leastLarger(a,i) {
     return a.indexOf(a.filter(el=> el > a[i]).sort((a,b)=>a-b)[0]);
   }


console.log(leastLarger( [4, 1, 3, 5, 6], 0 ));
console.log(leastLarger( [4, 1, 3, 5, 6], 4 ));
console.log(leastLarger( [
    7,  3,  2, -5, -4, -2,
    4, -5, -6,  9,  0, -6,
    0, -2
  ] ,3 ));