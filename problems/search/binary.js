// Binary  Search
function binary(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (array[middleIndex] === target) return middleIndex;
    if (array[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}

// Recursive Binary Search

function recursiveBinarySearch(arr, target) {
  if (Array.isArray(arr) || arr?.length > 0) {
    return search(arr, target, 0, arr.length - 1);
  }
  return -1;
}

function search(arr, target, left, right) {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  const middleValue = arr[middle];
  if (middleValue === target) {
    return middle;
  }
  if (middleValue < target) {
    return search(arr, target, left + 1, right);
  } else {
    return search(arr, target, left, right - 1);
  }
}

console.log(binary([1, 2, 3, 4, 5, 6], 4));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binary([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 11));
