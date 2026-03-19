function maxAverageSubArray(arr, k) {
  let sum = 0;

  for (let r = 0; r < k; r++) {
    sum += arr[r];
  }

  let avgSum = sum / k;

  for (let r = k; r < arr.length; r++) {
    sum += arr[r] - arr[r - k];

    avgSum = Math.max(avgSum, sum / k);
  }

  return avgSum;
}

console.log(maxAverageSubArray([1, 12, -5, -6, 50, 13], 4));
