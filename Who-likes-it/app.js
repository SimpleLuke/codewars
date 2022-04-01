function likes(names) {
    const num = names.length;
    if(num<1){
      return "no one likes this"
    }else if(num<2){
      return `${names[0]} likes this`;
    }else if(num<3){
      return `${names[0]} and ${names[1]} like this`;
    }else if(num<4){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }else{
      return `${names[0]}, ${names[1]} and ${num-2} others like this`;
    }
  }