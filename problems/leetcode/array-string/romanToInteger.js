function romanToInt(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let length = s.length;
  let i = 0;

  while (i < length) {
    const current = map[s[i]];
    const next = map[s[i + 1]];

    if (next && current < next) {
      sum += next - current;
      i += 2;
    } else {
      sum += current;
      i += 1;
    }
  }

  return sum;
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
