function longestStringPrefix(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

// explain with step by step how the function works with example input: ["flower", "flow", "flight"]

// 1. The function starts by checking if the input array `strs` is empty. If it is, it returns an empty string. In this case, the input is ["flower", "flow", "flight"], so we proceed to the next step.

// 2. The variable `prefix` is initialized to the first string in the array, which is "flower". This will be our initial candidate for the longest common prefix.

// 3. We enter a loop that iterates through each string in the array `strs`. The loop will check if the current string starts with the current `prefix`.

// 4. For the first iteration (i = 0), we check if "flower" starts with "flower". It does, so we move to the next iteration.

// 5. For the second iteration (i = 1), we check if "flow" starts with "flower". It does not, so we enter a while loop to shorten the `prefix
//    until it matches the start of "flow". We shorten `prefix` to "flowe", then "flow", and now "flow" starts with "flow". We exit the while loop and move to the next iteration.

// 6. For the third iteration (i = 2), we check if "flight" starts with "flow". It does not, so we enter the while loop again. We shorten `prefix` to "flo", then "fl". Now "flight" starts with "fl", so we exit the while loop.

// 7. After iterating through all the strings, the longest common prefix is now "fl". The function returns "fl" as the result.

console.log(longestStringPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestStringPrefix(["dog", "racecar", "car"])); // ""
console.log(
  longestStringPrefix(["interspecies", "interstellar", "interstate"]),
); // "inters"
console.log(longestStringPrefix(["throne", "dungeon"])); // ""
console.log(longestStringPrefix(["cheese", "cheese", "cheese"])); // "cheese"
console.log(longestStringPrefix([])); // ""
console.log(longestStringPrefix(["a"])); // "a"
console.log(longestStringPrefix(["a", "b", "c"])); // ""
console.log(longestStringPrefix(["ab", "a"])); // "a"
