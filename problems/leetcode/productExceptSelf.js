function productExceptSelf(nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const product = nums.reduce((acc, num) => acc * num, 1);
    nums[i] = product / nums[i];
  }
  return nums;
}

// Time complexity: O(n^2) due to the reduce operation inside the loop
// Space complexity: O(1) since we are modifying the input array in place
// write to optimize this solution to O(n) time complexity and O(1) space complexity (excluding the output array)
function productExceptSelf(nums) {
  const length = nums.length;
  const output = new Array(length).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < length; i++) {
    output[i] *= leftProduct;
    leftProduct *= nums[i];
  }
  // At this point, output[i] contains the product of all elements to the left of i
  // example: for [1, 2, 3, 4], output will be [1, 1, 2, 6] after this loop
  let rightProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([1, 0])); // [0, 1]
console.log(productExceptSelf([1])); // [1]
console.log(productExceptSelf([2, 3, 4])); // [12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0,0]
