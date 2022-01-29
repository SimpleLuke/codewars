function SeriesSum(n)
{
  let value = 1;
  let count = 1;
  if(n<1){
    return Number.parseFloat(n).toFixed(2)
  }
  while(n>1){
    count = count + 1/(value+(n-1)*3);
    n--;
  }
  return Number.parseFloat(count).toFixed(2);
}