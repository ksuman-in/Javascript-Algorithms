const flatArray = require("../flatArray");

test("flat array [1,[2,[11,12],[3,[4,[5],8,[9]]]]]) to equal [1, 2, 11, 12, 3, 4, 5, 8, 9]", () => {
  expect(flatArray([1, [2, [11, 12], [3, [4, [5], 8, [9]]]]])).toEqual([
    1, 2, 11, 12, 3, 4, 5, 8, 9,
  ]);
});
