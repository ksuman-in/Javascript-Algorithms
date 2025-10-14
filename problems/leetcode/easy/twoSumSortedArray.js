function twoSumSortedArray(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const num = numbers[left] + numbers[right];

    if (num === target) return [left + 1, right + 1];
    else if (num > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}

console.log(twoSumSortedArray([1, 3, 4, 5, 7, 11, 14], 9)); //[3,4]
