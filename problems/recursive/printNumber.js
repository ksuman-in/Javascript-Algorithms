function printNumberFromString(str) {
  if (str.length === 0) {
    return [];
  }
  const splitString = str.split(" ");
  return extractNumbers(splitString);
}

function extractNumbers(arr, index = 0, result = []) {
  if (index >= arr.length) {
    return result;
  }
  if (index < arr.length) {
    const nums = parseInt(arr[index]);
    if (!isNaN(nums)) {
      result.push(nums);
    }
    return extractNumbers(arr, index + 1, result);
  }
}

console.log(printNumberFromString("-123 abc 456 def -789 ghi")); // [-123, 456, -789]
