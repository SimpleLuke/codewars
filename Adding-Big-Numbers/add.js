function add(a, b) {
  const sum = Number(a) + Number(b);
  if (!sum.toString().includes(".")) {
    return sum.toString();
  } else {
    const maxLen = Math.max(a.length, b.length);
    let carry = 0;
    let result = [];

    for (let i = 0; i < maxLen - 1; i++) {
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
    return result.join("");
  }
}

module.exports = add;
