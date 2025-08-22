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

console.log(longestStringPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestStringPrefix(["dog", "racecar", "car"])); // ""
console.log(
  longestStringPrefix(["interspecies", "interstellar", "interstate"])
); // "inters"
console.log(longestStringPrefix(["throne", "dungeon"])); // ""
console.log(longestStringPrefix(["cheese", "cheese", "cheese"])); // "cheese"
console.log(longestStringPrefix([])); // ""
console.log(longestStringPrefix(["a"])); // "a"
console.log(longestStringPrefix(["a", "b", "c"])); // ""
console.log(longestStringPrefix(["ab", "a"])); // "a"
