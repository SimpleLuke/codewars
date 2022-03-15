function findRoutes(routes) {
    let list = [].concat(...routes); //flat array
    list = list.filter(el=>list.indexOf(el)==list.lastIndexOf(el)); //Find the starting place & ending place
    const target = routes.length+1;
    let counter = 0;
    for(let i=0;i<routes.length;i++){ //kick out ending place and keep the starting place only
        if(list[0]==routes[i][1]){
            list.shift();
        }else if(list.length>1){
            list.pop();
        }
    }
   while(list.length<target){
    if(list[list.length-1]==routes[counter][0]){ //match the start to the end with each routes
        list.push(routes[counter][1]);
        routes.splice(counter,1);
        counter = 0
    }else{
        counter ++;
    }
   }
    return list.join(", ");
  }

// console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]));
console.log(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]));