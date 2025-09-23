function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i];
    if (numMap.has(value)) {
      return [numMap.get(value), i];
    }
    numMap.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
