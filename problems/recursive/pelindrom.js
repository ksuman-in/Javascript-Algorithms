function pelindrome(str) {
  if (str.length <= 1) return true;

  let length = str.length;

  if (str[0] === str[length - 1]) {
    return pelindrome(str.slice(1, length - 1));
  }

  return false;
}

console.log(pelindrome("racecar")); // true
console.log(pelindrome("hello")); // false
console.log(pelindrome("a")); // true
console.log(pelindrome("")); // true
console.log(pelindrome("abccba")); // true
console.log(pelindrome("abcba")); // true
console.log(pelindrome("abccbx")); // false
