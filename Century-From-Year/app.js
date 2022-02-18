function century(year){
    if(year%100==0){
        return year/100;
    }else{
        return Math.floor(year/100)+1;
    }
}

//There is a Math.ceil() function which always rounds a number up to the next largest integer.
function century2(year){
    return Math.ceil(year/100);
}
