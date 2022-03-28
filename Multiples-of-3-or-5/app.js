function solution(number){
    if(number<1){
      return 0;
    }
    let num=3;
    const arr = [];
    while(num<number){
      if(num%3==0||num%5==0){
        arr.push(num)
      }
      num++;
    }
    const uniArr = Array.from(new Set(arr));
    return uniArr.reduce((sum,el)=>sum+el);
  }

//A simple way to do
function solution(number){
    let sum =0;
    for(let i=1; i<number; i++){
        if(i%3==0 || i%5==0){
            sum += i
        }
    }
    return sum;
}