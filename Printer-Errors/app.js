function printerError(s){
    const good = ["a","b","c","d","e","f","g","h","i","j","k","l","m"];
    let error =0;

    for(let el of s.split("")){
        if(good.indexOf(el)==-1){
            error++;
        }
    }
    return `${error}/${s.length}`;
}

//another way using regex
const printerError2 = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));