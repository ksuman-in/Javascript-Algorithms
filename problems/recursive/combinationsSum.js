function combinationsSum(nums, target) {
  let result = [];

  backtrack(nums, 0, 0, [], result, target);

  return result;
}

function backtrack(nums, index, currentSum, path, result, target) {
  if (currentSum === target) {
    result.push([...path]);
    return;
  }

  if (currentSum > target) {
    return;
  }

  for (let i = index; i < nums.length; i++) {
    path.push(nums[i]);
    backtrack(nums, i + 1, currentSum + nums[i], path, result, target);
    path.pop();
  }
}

console.log(combinationsSum([2, 3, 6, 7], 7));
console.log(combinationsSum([1, 2, 3, 4, 5], 5));
