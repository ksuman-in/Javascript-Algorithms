function productExceptSelf(nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const product = nums.reduce((acc, num) => acc * num, 1);
    nums[i] = product / nums[i];
  }
  return nums;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([1, 0])); // [0, 1]
console.log(productExceptSelf([1])); // [1]
console.log(productExceptSelf([2, 3, 4])); // [12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0,0]
