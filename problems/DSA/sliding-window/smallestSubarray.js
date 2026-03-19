function smallestSubarray(arr, target) {
  let left = 0;
  let minLength = Infinity;
  let currSum = 0;

  for (let right = 0; right < arr.length; right++) {
    currSum += arr[right];

    while (currSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currSum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(smallestSubarray([2, 3, 1, 2, 4, 3], 7));
console.log(smallestSubarray([3, 4, 4, 2, 1, 2], 9));
