function flatArray(arr, result = []) {
  arr.forEach((element) => {
    if (typeof element === "object") {
      return flatArray(element, result);
    } else {
      result.push(element);
    }
  });
  return result;
}

module.exports = flatArray;

console.log(
  flatArray([1, [2, [11, [111, [123, 124]], 12], [3, [4, [5], 8, [9]]]]])
);
