//Since walking north counters walking south (east vs west), I check if the direction array length equal to the counter one.

function isValidWalk(walk) {
  if(walk.length==10){
    const n = [];
    const s = [];
    const e = [];
    const w = [];
    for(let el of walk){
      switch(el){
          case 'n':
            n.push(el);
            break;
          case 's':
            s.push(el);
            break;
          case 'e':
            e.push(el);
            break;
          case 'w':
            w.push(el);
            break;
      }
    }

   if(n.length===s.length){
     if(e.length===w.length){
       return true;
     }
   }
  }
  return false;
}