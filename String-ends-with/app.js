// My initial try

function solution(str, ending){
  return str.slice(-ending.length)==ending?true:false;
}

//There is also a string method

function solution(str, ending){
    return str.endsWith(ending);
  }