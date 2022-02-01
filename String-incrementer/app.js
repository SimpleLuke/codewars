function incrementString (string) {
    const reg = /[\d]+$/g; 
    if(string.match(reg)){
        const matchNum = string.match(reg)[0];//Find out the digits at the end
        let addNum = (parseInt(matchNum) + 1).toString();//Add 1 to the number
        //Compare two lengths and add up the zeros
        if(matchNum.length>addNum.length){
            const count = matchNum.length - addNum.length;
            for(let i=0; i<count; i++){
            addNum = '0' + addNum;
        }
    }
    return string.replace(matchNum,addNum);
    }else{
        return string + 1; // Just add 1 if there is no digits at the end
    }
    
}

console.log(incrementString("foobar000"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
console.log(incrementString("foobar99"));
console.log(incrementString("foobar099"));
console.log(incrementString(""));
