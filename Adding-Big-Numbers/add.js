function add(a, b) {
  const maxLen = Math.max(a.length, b.length);
  let carry = 0;
  let result = [];

  for (let i = 0; i < maxLen; i++) {
    const digitA = parseInt(a[a.length - 1 - i]) || 0;
    const digitB = parseInt(b[b.length - 1 - i]) || 0;
    let sum = digitA + digitB + carry;
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }
    result.unshift(sum.toString());
  }
  if (carry > 0) {
    result.unshift("1");
  }
  return result.join("");
}

module.exports = add;
