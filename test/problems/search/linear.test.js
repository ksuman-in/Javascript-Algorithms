const linear = require("../../../problems/search/linear");

test("Linear search in Array value", () => {
  expect(linear([11, 2, 13, 4, 34, 23], 2)).toEqual(1);
});
test("Linear search not in array value", () => {
  expect(linear([11, 2, 13, 4, 34, 23], 10)).toEqual(-1);
});
