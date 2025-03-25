function linear(arr, target) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === target) {
      return index;
    }
  }
  return -1;
}

console.log(linear([11, 2, 13, 4, 34, 23], 2));
console.log(linear([11, 2, 13, 4, 34, 23], 5));
console.log(linear([11, 2, 13, 4, 34, 23], 34));
