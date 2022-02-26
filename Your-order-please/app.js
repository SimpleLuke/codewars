function order(words){
  let regex = /[\a-z]/ig;
  let arrayOld = words.split(" ");
  let arrayNew = [...arrayOld];
  for(let i=0;i<arrayOld.length;i++){
      let index = arrayOld[i].replace(regex,'');
      arrayNew[index-1] = arrayOld[i];
  }
  return arrayNew.join(" ");
}

//Using sort function
function order2(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }   

console.log(order("is2 Thi1s T4est 3a"));