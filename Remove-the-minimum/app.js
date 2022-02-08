function removeSmallest(array){
    if(array==[]){
        return [];
    }else{
        let array2 = [...array];
        const small = [...array2].sort((a,b)=>a-b)[0];
        const index = array.indexOf(small);
        array2.splice(index,1);
        return array2;
    }
}

console.log(removeSmallest([2,2,1,2,1]));