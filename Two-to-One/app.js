function longest(s1, s2) {
    return [...new Set(s1+s2)].sort().join("");
  }

//A JavaScript Set is a collection of unique values.

//Each value can only occur once in a Set.

//A Set can hold any value of any data type.