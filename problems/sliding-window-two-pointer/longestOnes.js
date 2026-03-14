function longestOnes(arr, flip) {
  let left = 0;
  let maxLength = 0;
  let countZero = 0;

  for (let right = 0; right < arr.length; right++) {
    const curr = arr[right];

    if (curr === 0) {
      countZero++;
    }

    while (countZero > flip) {
      if (arr[left] === 0) {
        countZero--;
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 2));
console.log(longestOnes([1, 1, 1, 0, 0, 1, 1, 1, 1, 1], 1));
