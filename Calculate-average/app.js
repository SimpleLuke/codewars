function find_average(array){
    if(array.length>0){
        return array.reduce((acc,cur)=>acc+cur)/array.length;
    }else{
        return 0;
    }
}