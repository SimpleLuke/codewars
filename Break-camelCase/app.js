// complete the function
function solution(string) {
  let newString = "";
  for (let letter of string) {
    if (letter == letter.toUpperCase()) {
      newString += " " + letter;
    } else {
      newString += letter;
    }
  }
  return newString;
}
