function sumArray(array){
    if(!array){ //check if array == null
        return 0;
    }else if(array.length<3){ //check if array only have two values
        return 0;
    }else{
        array.sort((a,b)=>a-b);
        let count=0;
        for(let i=0; i<array.length;i++){
          if(i!=0&&i!=array.length-1){
            count += array[i];
          }
        }
      return count;
    }
}