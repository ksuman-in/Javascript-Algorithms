function quick(array) {
  const length = array.length;
  if (length < 2) {
    return array;
  }
  let middle = array[length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < length - 1; i++) {
    const ele = array[i];
    if (ele < middle) {
      left.push(ele);
    } else {
      right.push(ele);
    }
  }
  return [...quick(left), middle, ...quick(right)];
}

console.log(quick([10, 2, 11, 4, 3, 5, -10, 8]));
console.log(quick([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
