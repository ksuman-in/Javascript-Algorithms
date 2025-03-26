function insertion(array) {
  for (let i = 1; i < array.length; i++) {
    let noToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > noToInsert) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = noToInsert;
  }
  return array;
}

console.log(insertion([8, 20, -2, 4, -6]));
