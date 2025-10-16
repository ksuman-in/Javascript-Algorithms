function longestSubstring(s) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  const charIndexMap = new Map();

  while (right < s.length) {
    const currentChar = s[right];
    while (charIndexMap.has(currentChar)) {
      charIndexMap.delete(s[left]);
      left++;
    }

    charIndexMap.set(currentChar);
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
}
