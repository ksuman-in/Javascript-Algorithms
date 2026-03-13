function getPermutations(arr) {
  let result = [];
  backtrack(arr, 0, result);

  return result;
}

function backtrack(arr, index, result) {
  if (index === arr.length) {
    result.push([...arr]);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]];
    backtrack(arr, index + 1, result);
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
}

console.log(getPermutations([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]]
console.log(getPermutations([1, 2])); // [[1, 2], [2, 1]]
console.log(getPermutations([1])); // [[1]]
console.log(getPermutations([])); // [[]]
