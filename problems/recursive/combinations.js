function combinations(num, k) {
  if (k === 0) return [[]];
  if (k > num) return [];
  let result = [];

  for (let i = num; i > 0; i--) {
    let sub = combinations(i - 1, k - 1);
    for (let s of sub) {
      result.push([i, ...s]);
    }
  }
  return result;
}

function combinationsBacktrack(nums, k) {
  let result = [];
  backtrack(nums, k, 0, [], result);
  return result;
}

function backtrack(nums, k, index, path, result) {
  if (path.length === k) {
    result.push([...path]);
    return;
  }
  for (let i = index; i < nums.length; i++) {
    path.push(nums[i]);
    backtrack(nums, k, i + 1, path, result);
    path.pop();
  }
}

console.log(combinationsBacktrack([1, 2, 3, 4], 2)); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
