//A simplier way to get rid of 'https://','http://'&'www.'
function domainName(url){
    url = url.replace('https://','');
    url = url.replace('http://','');
    url = url.replace('www.','');
    return url.split('.')[0];
}

//Using Regex;
function domainNameReg(url){
    const checkWww = new RegExp('www');
    const checkHttp = new RegExp('http*');
    const regexHttp = /(\/)([a-zA-Z0-9_-]+)\./ig;
    const regexWww = /(\.)([a-zA-Z0-9_-]+)\./ig;
    const regexNon = /(^[a-zA-Z0-9_-]+)/ig;
    let match;
    if(checkWww.test(url)){
        match = url.match(regexWww)[0].split("");
    }else if(checkHttp.test(url)){
        match = url.match(regexHttp)[0].split("");
    }else{
        match = url.match(regexNon)[0].split("");
        return match.join("");
    }
    match.splice(0,1);
    match.splice(-1,1);
    return match.join("");
}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("youtube.com"));