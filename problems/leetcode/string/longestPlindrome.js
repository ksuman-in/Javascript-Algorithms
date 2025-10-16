function lonestPlindrome(s) {
  let plindrome = "";

  function getPlindrome(left, right, s) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    const odd = getPlindrome(i, i, s);
    const even = getPlindrome(i, i + 1, s);
    const maxPlindrome = odd.length > even.length ? odd : even;
    plindrome =
      plindrome.length > maxPlindrome.length ? plindrome : maxPlindrome;
  }

  return plindrome;
}

console.log(lonestPlindrome("babad")); // "bab" or "aba"
console.log(lonestPlindrome("cbbd")); // "bb"
console.log(lonestPlindrome("a")); // "a"
console.log(lonestPlindrome("ac")); // "a" or "c"
console.log(lonestPlindrome("racecar")); // "racecar"
console.log(lonestPlindrome("forgeeksskeegfor")); // "geeksskeeg"

// The function lonestPlindrome takes a string s and returns the longest palindromic substring in s.
// A palindrome is a string that reads the same forwards and backwards. The function uses a helper function getPlindrome to expand around potential centers of palindromes and checks both odd-length and even-length palindromes.
