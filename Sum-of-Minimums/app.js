function sumOfMinimums(arr) {
    return arr.reduce((acc,cur)=>acc+Math.min(...cur),0)
  }