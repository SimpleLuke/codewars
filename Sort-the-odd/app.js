function sortArray(array){
    let oddSort = array.filter(el=>el%2!==0).sort((a,b)=>a-b);
    let index =[];
    for(let i=0; i<array.length; i++){
        if(array[i]%2!=0){
            index.push(i);
        }
    }
    for(let i=0; i<oddSort.length;i++){
        array[index[i]]=oddSort[i];
    }
    return array;
}
// console.log(sortArray([5, 8, 6, 3, 4]));
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(sortArray([1, 111, 11, 11, 2,1,  5,  0]));