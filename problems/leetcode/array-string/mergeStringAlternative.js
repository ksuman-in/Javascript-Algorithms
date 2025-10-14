function mergeStringAlternative(word1, word2) {
  let l1 = word1.length;
  let l2 = word2.length;
  let result = [];
  let i = 0,
    j = 0;
  let words = 1;

  while (i < l1 && j < l2) {
    if (words === 1) {
      result.push(word1[i]);
      i++;
      words = 2;
    } else {
      result.push(word2[j]);
      j++;
      words = 1;
    }
  }

  while (i < l1) {
    result.push(word1[i]);
    i++;
  }

  while (j < l2) {
    result.push(word2[j]);
    j++;
  }

  return result.join("");
}

console.log(mergeStringAlternative("abc", "pqr")); // "apbqcr"
console.log(mergeStringAlternative("ab", "pqrs")); // "apbqrs"
console.log(mergeStringAlternative("abcd", "pq")); // "apbqcd"
console.log(mergeStringAlternative("", "xyz")); // "xyz"
console.log(mergeStringAlternative("hello", "")); // "hello"

// The function mergeStringAlternative takes two strings as input and merges them by alternating characters from each string. If one string is longer, the remaining characters are appended at the end.
