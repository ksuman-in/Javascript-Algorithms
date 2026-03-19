function squareAscendingArray(arr) {
  let length = arr.length;
  let left = 0;
  let right = length - 1;
  let result = new Array({ length });

  for (let index = length - 1; index >= 0; index--) {
    const leftSq = arr[left] ** 2;
    const rightSq = arr[right] ** 2;

    if (leftSq > rightSq) {
      result[index] = leftSq;
      left++;
    } else {
      result[index] = rightSq;
      right--;
    }
  }

  return result;
}

console.log(squareAscendingArray([-4, -1, 0, 3, 10]));
console.log(squareAscendingArray([-12, -11, 0, 3, 10]));
