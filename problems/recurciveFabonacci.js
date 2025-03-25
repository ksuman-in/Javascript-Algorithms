function recurciveFabonacci(n) {
  if (n < 2) {
    return n;
  }
  return recurciveFabonacci(n - 1) + recurciveFabonacci(n - 2);
}

function fabonacci(n) {
  const fab = [0, 1];
  for (let i = 2; i <= n; i++) {
    fab[i] = fab[i - 1] + fab[i - 2];
  }
  return fab;
}

console.log(recurciveFabonacci(1), fabonacci(1));
console.log(recurciveFabonacci(3), fabonacci(3));
console.log(recurciveFabonacci(6), fabonacci(6));
// 0,1,1,2,3,5,8
