function filter_list(l) {
    return l.filter(el=>typeof el == 'number');
  }

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,2,'aasf','1','123',123]));