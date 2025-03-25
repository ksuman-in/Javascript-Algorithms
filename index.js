// function factorial(n) {
//     if(n>1){
//         return n*factorial(n-1);
//     } else {
//         return n;
//     }
// }

function primeNumber(n) {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    let div = n % i === 0;
    if (div) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

console.log(primeNumber(2));
console.log(primeNumber(6));
console.log(primeNumber(4));
