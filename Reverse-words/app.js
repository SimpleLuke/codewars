function reverseWords(str){
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
    
}

console.log(reverseWords("This is an example!"))
console.log(reverseWords("double  spaces"))