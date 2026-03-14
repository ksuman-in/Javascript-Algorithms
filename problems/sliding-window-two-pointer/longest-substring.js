function longestSubstringWithRepeatingWithSet(str) {
  let left = 0;
  let maxLength = 0;
  let obj = new Set();

  for (let right = 0; right < str.length; right++) {
    const char = str[right];

    while (obj.has(char)) {
      obj.delete(str[left]);
      left++;
    }

    obj.add(char);

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return { maxLength };
}

function longestSubstringWithRepeatingWithMap(str) {
  let left = 0;
  let charObj = new Map();
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    if (charObj.has(char)) {
      left = Math.max(charObj.get(char), left);
    }

    charObj.set(char, right + 1);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(longestSubstringWithRepeatingWithSet("abcabcbb"));
console.log(longestSubstringWithRepeatingWithMap("abcabcbb"));
