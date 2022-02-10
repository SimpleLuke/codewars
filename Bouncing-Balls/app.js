function bouncingBall(h, bounce, window){
    if(h>0&&1>bounce&&bounce>0&&window<h){
        let count =1;
        let newH =h*bounce;
        while(newH>window){
            count+=2;
            newH *= bounce; 
        }
        return count;
    }else{
        return -1;
    }
}

