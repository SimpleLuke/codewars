function getCount(str) {
    var vowelsCount = 0;
    let regex = /[aeiou]/ig;
    if(str.match(regex)!=null){
      vowelsCount = str.match(regex).length ;
    }
    return vowelsCount;
  }


//it could be shorter,using ||(or) operator

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

console.log(getCount('my pyx'));