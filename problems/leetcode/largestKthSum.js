function largestKthSum(arr, k) {
  if (arr.length < k) return null;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    left = i - k;
    windowSum = windowSum - arr[left] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(largestKthSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(largestKthSum([-1, -4, -2, -10, -23, -3, -1, 0, -20], 4));
console.log(largestKthSum([2, 3], 3));
console.log(largestKthSum([2, 3, 5], 3));
