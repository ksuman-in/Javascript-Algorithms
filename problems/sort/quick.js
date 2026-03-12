function quick(array) {
  const length = array.length;
  if (length < 2) {
    return array;
  }
  const pivotIndex = Math.floor(length / 2);
  const pivot = array[pivotIndex];
  let left = [];
  let right = [];
  let middle = [];

  for (let i = 0; i < length; i++) {
    const ele = array[i];
    if (ele < pivot) {
      left.push(ele);
    } else if (ele === pivot) {
      middle.push(ele);
    } else {
      right.push(ele);
    }
  }
  return [...quick(left), ...middle, ...quick(right)];
}

console.log(quick([10, 2, 11, 4, 3, 5, -10, 8]));
console.log(quick([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(quick([22, 12, 8, 20, -2, 6, 4]));
