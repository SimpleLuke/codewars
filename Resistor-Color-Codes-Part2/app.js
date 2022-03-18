function encodeResistorColors(ohmsString) {
    const color = {0: 'black', 1: 'brown', 2: 'red', 3: 'orange', 4: 'yellow', 5: 'green', 6: 'blue', 7: 'violet', 8: 'gray', 9: 'white'};
    ohmsString = ohmsString.replace(' ohms','').split("");
    if(ohmsString[ohmsString.length-1]=='M'){
        ohmsString.splice(ohmsString.length-1,1);
        ohmsString = String(ohmsString.join("")*1000000).split("");
        let zero = ohmsString.slice(2).length;
        return `${color[ohmsString[0]]} ${color[ohmsString[1]]} ${color[zero]} gold`;
    }else if(ohmsString[ohmsString.length-1]=='k'){
        ohmsString.splice(ohmsString.length-1,1);
        ohmsString = String(ohmsString.join("")*1000).split("");
        let zero = ohmsString.slice(2).length;
        return `${color[ohmsString[0]]} ${color[ohmsString[1]]} ${color[zero]} gold`;
    }else{
        return `${color[ohmsString[0]]} ${color[ohmsString[1]]} ${ohmsString.length>2?'brown':'black'} gold`;
    }
}

console.log(encodeResistorColors("10 ohms"));
console.log(encodeResistorColors("100 ohms"));
console.log(encodeResistorColors("4.7k ohms"));
console.log(encodeResistorColors("22k ohms"));
console.log(encodeResistorColors("1M ohms"));