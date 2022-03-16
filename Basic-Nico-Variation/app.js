const nico = (key, m) => { 
    // let index = key.split("").sort(); //acryz in array
    let order = []; //23154 in array
    let reorder = [];
    let result = '';
    for(let i=0; i<key.length; i++){
        order.push((key.split("").sort().indexOf(key[i])));
    }

    for(let i=0;i<order.length;i++){
        reorder.push(order.indexOf(i));
    }

    for(let i=0; i<m.length; i+=key.length){
        for(let j=0; j<key.length; j++){
            if(m[reorder[j]+i]){
                result += m[reorder[j]+i]; 
            }else{
                result += " "; 
            }
        }
    }
    return result;
  }


  console.log(nico("crazy","secretinformation" ));//"cseerntiofarmit on  "
  console.log(nico("abc", "abcd" ));//"abcd  "
