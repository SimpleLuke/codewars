const deNico = (key, m) => { 
    // let index = key.split("").sort(); //acryz in array
    let order = []; //23154 in array
    let result = '';
    for(let i=0; i<key.length; i++){
        order.push((key.split("").sort().indexOf(key[i])));
    }
    for(let i=0; i<m.length; i+=key.length){
        for(let j=0; j<key.length; j++){
            console.log(m[order[j]+i]);
            if(m[order[j]+i]!=undefined){
                result += m[order[j]+i]; 
            }
        }
    }
    return result.replace(/ +$/, '');
  }


  console.log(deNico("crazy","cseerntiofarmit on  " ));//"secretinformation"
  console.log(deNico("crazy","cseerntiofarmit on" ));//"secretinformation"


