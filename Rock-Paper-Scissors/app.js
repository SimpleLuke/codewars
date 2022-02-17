const rps = (p1,p2) => {
    if(p1=="scissors"&&p2=="paper"){
        return "Player 1 won!";
    }else if(p1=="scissors"&&p2=="rock"){
        return "Player 2 won!";
    }else if(p1=="rock"&&p2=="scissors"){
        return "Player 1 won!";
    }else if(p1=="rock"&&p2=="paper"){
        return "Player 2 won!";
    }else if(p1=="paper"&&p2=="rock"){
        return "Player 1 won!";
    }else if(p1=="paper"&&p2=="scissors"){
        return "Player 2 won!";
    }else{
        return "Draw!";
    }
}

//Using object to make it shorter
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };