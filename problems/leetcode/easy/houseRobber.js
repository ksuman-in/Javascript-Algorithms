function houseRobber(nums) {
  let prevMax = 0;
  let currMax = 0;

  for (let num of nums) {
    let temp = Math.max(prevMax + num, currMax);
    prevMax = currMax;
    currMax = temp;
  }
  return currMax;
}

console.log(houseRobber([1, 2, 3, 1])); // 4
console.log(houseRobber([2, 7, 9, 3, 1])); // 12
console.log(houseRobber([2, 1, 1, 2])); // 4
