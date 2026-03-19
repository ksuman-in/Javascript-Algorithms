function twoSumSortedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(twoSumSortedArray([1, 5, 10, 11, 15, 25], 21));
console.log(twoSumSortedArray([2, 7, 8, 9], 9));
