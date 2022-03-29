function digital_root(n) {
    n = n.toString().split("");
    while(n.length>1){
      n = n.reduce((acc,cur)=>parseInt(acc)+parseInt(cur)).toString().split("");
    }
  
    return parseInt(n);
  }