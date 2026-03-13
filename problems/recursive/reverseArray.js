function reverseArray(arr) {
  if (arr.length === 0) return arr;

  let i = 0;
  let length = arr.length;

  swapArray(i, length - 1 - i, arr);
  return arr;
}

function swapArray(l, r, arr) {
  if (l > r) return;
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;

  swapArray(l + 1, r - l - 1, arr);
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverseArray([])); // []
