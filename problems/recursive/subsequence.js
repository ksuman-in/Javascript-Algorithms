function subsequence(str) {
  if (str.length === 0) return [""];

  let sub = subsequence(str.slice(1));
  let result = [];
  for (let s of sub) {
    result.push(s);
    result.push(str[0] + s);
  }
  return result;
}

function subSequenceArray(arr) {
  let result = [];
  backtrack(arr, 0, [], result);
  return result;
}

function backtrack(arr, index, path, result) {
  if (index === arr.length) {
    result.push([...path]);
    return;
  }
  path.push(arr[index]);
  backtrack(arr, index + 1, path, result);
  path.pop();

  backtrack(arr, index + 1, path, result);
}

// console.log(subsequence("abc")); // ["", "c", "b", "bc", "a", "ac", "ab", "abc"]
// console.log(subsequence("")); // [""]
// console.log(subsequence("a")); // ["", "a"]
// console.log(subsequence("ab")); // ["", "b", "a", "ab"]
console.log(subSequenceArray([1, 2, 3])); // [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
console.log(subSequenceArray([3, 2, 1])); // [[], [1], [2], [2, 1], [3], [3, 1], [3, 2], [3, 2, 1]]
