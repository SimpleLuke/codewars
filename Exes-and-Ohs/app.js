function XO(str){
    let x = 0;
    let o = 0;
    let arr = str.toLowerCase().split("");
    for(let el of arr){
        if(el=='x'){
            x++;
        }else if(el=='o'){
            o++;
        }
    }
    if(x==o){
        return true;
    }else{
        return false;
    }
}


//another way usuing regex
function XO2(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }