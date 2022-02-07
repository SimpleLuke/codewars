function disemvowel(str){
    const regex = /[aeiou]/ig;
    return str.replace(regex,"");
}

console.log(disemvowel("This website is for losers LOL!"));
