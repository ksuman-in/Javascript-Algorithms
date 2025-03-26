function bubble(array) {
  let isSwapped;
  do {
    isSwapped = false;
    for (let index = 0; index < array.length - 1; index++) {
      const ithEle = array[index];
      const ithNext = array[index + 1];
      if (ithNext < ithEle) {
        isSwapped = true;
        array[index] = array[index + 1];
        array[index + 1] = ithEle;
      }
    }
  } while (isSwapped);
  return array;
}

console.log(bubble([10, 2, 11, 4, 3, 5, -10, 8]));
console.log(bubble([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
