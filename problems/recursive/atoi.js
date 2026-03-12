/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  if (!s || s.length === 0) {
    return 0;
  }
  let sign = 1;
  let result = 0;
  let i = 0;

  while (i < s.length && s[i] === " ") {
    i++;
    continue;
  }

  if (s[i] === "-" && i < s.length) {
    sign = -1;
    i++;
  } else if (s[i] === "+" && i < s.length) {
    i++;
  }

  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    let char = s[i];
    i++;
    if (char === "0" && result === 0) {
      continue;
    }
    // Check for overflow
    if (result > (2147483647 - parseInt(char)) / 10) {
      return sign === 1 ? 2147483647 : -2147483648;
    }
    result = result * 10 + parseInt(char);
  }

  return sign * result;
};

console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
