function merge(array) {
  const length = array.length;
  if (length < 2) {
    return array;
  }
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return mergeHelper(merge(left), merge(right));
}

function mergeHelper(left, right) {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

console.log(merge([10, 2, 11, 4, 3, 5, -10, 8]));
console.log(merge([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(merge([22, 12, 8, 20, -2, 6, 4]));
// console.log(merge([1]));
// console.log(merge([]));
// console.log(merge([1, 2]));
// console.log(merge([2, 1]));
// console.log(merge([1, 2, 3]));
// console.log(merge([3, 2, 1]));
// console.log(merge([1, 2, 3, 4]));
