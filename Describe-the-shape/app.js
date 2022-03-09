function describeTheShape( angles ){
    if(angles<=2){
      return "this will be a line segment or a dot";
    }else{
      return `This shape has ${angles} sides and each angle measures ${Math.floor((angles-2)*180/angles)}`;
    }
  }

//The formula for calculating the sum of interior angles is ( n − 2 ) × 180 ∘ where is the number of sides. 