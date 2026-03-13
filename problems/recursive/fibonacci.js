function fibonacci(n) {
  if (n <= 0) return 0;

  if (n === 1) return 1;
  let last = fibonacci(n - 1);
  let secondLast = fibonacci(n - 2);
  return last + secondLast;
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
