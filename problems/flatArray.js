function flatArray(arr) {
  let result = [];
  arr.forEach((element) => {
    if (typeof element === "object") {
      result.push(...flatArray(element));
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
