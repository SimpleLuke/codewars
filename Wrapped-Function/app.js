Function.prototype.wrap = function(func) {
    return func.bind(this, this);
  }


  //The bind() method creates a new function that, 
  //when called, has its this keyword set to the provided value, 
  //with a given sequence of arguments preceding any provided when the new function is called.