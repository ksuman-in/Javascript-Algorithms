function isSubSequence(s, t) {
  if (s.length === 0) return true;
  if (s.length > t.length) return false;

  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      if (i === s.length - 1) return true;
      i++;
    }
    j++;
  }
  return false;
}

console.log(isSubSequence("abc", "ahbgdc")); // true
console.log(isSubSequence("axc", "ahbgdc")); // false
console.log(isSubSequence("", "ahbgdc")); // true
console.log(isSubSequence("abc", "")); // false
console.log(isSubSequence("aaaaaa", "bbaaaa")); // false
console.log(isSubSequence("b", "c")); // false

// The function isSubSequence checks if string s is a subsequence of string t.
// A subsequence means that all characters of s appear in t in the same order, but not necessarily consecutively.
