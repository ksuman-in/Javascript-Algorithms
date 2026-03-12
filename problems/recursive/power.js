function power(base, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    base = 1 / base;
    n = -n;
  }
  return base * power(base, n - 1);
}

console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log(power(3, -2)); // 1/9
console.log(power(2, -3)); // 1/8
console.log(power(10, 2)); // 100
