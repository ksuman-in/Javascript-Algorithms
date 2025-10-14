function closestToZero(arr) {
  if (arr.length === 0) return null;

  let closest = arr[0];

  for (let num of arr) {
    if (
      Math.abs(num) < Math.abs(closest) ||
      (Math.abs(num) === Math.abs(closest) && num > closest)
    ) {
      closest = num;
    }
  }
  return closest;
}

console.log(closestToZero([2, -1, 1, -3, 3])); // 1
console.log(closestToZero([-2, -1, -3])); // -1
console.log(closestToZero([3, 2, 1])); // 1
console.log(closestToZero([])); // null
console.log(closestToZero([0, -1, 1])); // 0
console.log(closestToZero([-5, -2, 2, 5])); // 2

// The function closestToZero takes an array of integers and returns the number closest to zero.
// If there are two numbers equally close to zero, it returns the positive one.
// If the array is empty, it returns null.
