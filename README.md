# Javascript-Algorithms

A collection of JavaScript implementations of classic algorithms, data structures, and coding challenge solutions.

## 🚀 Quick Start

```sh
# Install dependencies
npm install

# Run all tests
npm test

# Run a specific algorithm
node problems/recursive/subsequence.js
```

## 📁 Project Structure

```
Javascript-Algorithms/
├── index.js
├── package.json
├── README.md
├── problems/
│   ├── flatArray.js
│   ├── powerOfTwo.js
│   ├── leetcode/              # LeetCode-style challenge solutions
│   │   ├── array-string/
│   │   │   ├── closestToZero.js
│   │   │   ├── isSubSequence.js
│   │   │   ├── mergeStringAlternative.js
│   │   │   ├── profitBuySell.js
│   │   │   └── romanToInteger.js
│   │   ├── easy/
│   │   │   ├── anagram.js
│   │   │   ├── houseRobber.js
│   │   │   ├── maximumSubArray.js
│   │   │   ├── mergeTwoSortedLinklist.js
│   │   │   ├── twoSum.js
│   │   │   └── twoSumSortedArray.js
│   │   ├── string/
│   │   │   ├── longestPlindrome.js
│   │   │   ├── longestStringPrefix.js
│   │   │   └── longestSubstring.js
│   │   ├── largestKthSum.js
│   │   ├── middleValue.js
│   │   ├── palindrom.js
│   │   └── productExceptSelf.js
│   ├── queue/                 # Queue implementations
│   │   ├── queue-array.js
│   │   └── queue-object.js
│   ├── recursive/             # Recursion practice problems
│   │   ├── atoi.js
│   │   ├── combinations.js
│   │   ├── combinationsSum.js
│   │   ├── fibonacci.js
│   │   ├── pelindrom.js
│   │   ├── permutationArray.js
│   │   ├── power.js
│   │   ├── printNumber.js
│   │   ├── reverseArray.js
│   │   └── subsequence.js
│   ├── search/                # Search algorithms
│   │   ├── binary.js
│   │   └── linear.js
│   ├── sliding-window-two-pointer/  # Sliding window and two pointer problems
│   │   ├── longest-substring.js
│   │   ├── longestOnes.js
│   │   └── smallestSubarray.js
│   └── sort/                  # Sorting algorithms
│       ├── bubble.js
│       ├── insertion.js
│       ├── merge.js
│       └── quick.js
└── test/                      # Automated tests
    ├── problems/
    │   ├── flatArray.test.js
    │   └── search/
    │       ├── binary.test.js
    │       └── linear.test.js
```

## ✅ Included Algorithms & Problems

### Sorting
- Bubble Sort
- Insertion Sort
- Merge Sort
- Quick Sort

### Searching
- Linear Search
- Binary Search

### Data Structures
- Queue (array-based)
- Queue (object-based)

### Recursion
- Fibonacci
- Subsequence generation
- Subset combination / power set
- Permutations
- Flatten nested arrays
- Power of two check
- Palindrome check
- Reverse array
- Print numbers
- ATOI (string to integer)
- Combination sum

### Sliding Window / Two Pointer
- Longest substring without repeating characters
- Longest subarray with at most K ones
- Smallest subarray with sum greater than or equal to target

### LeetCode-style Problems

#### Easy
- Two Sum
- Two Sum (sorted array)
- House Robber
- Maximum Subarray
- Merge Two Sorted Lists
- Valid Anagram

#### Array and String
- Product Except Self
- Roman to Integer
- Merge Strings Alternately
- Is Subsequence
- Closest to Zero
- Best Time to Buy and Sell Stock

#### String
- Longest Palindromic Substring
- Longest Common Prefix
- Longest Substring Without Repeating Characters

#### Other
- Palindrome Number
- Middle of the Linked List
- Largest Kth Sum

## 🧪 Running Tests

This repo uses [Jest](https://jestjs.io/) for testing.

```sh
npm test
```

## ✨ Adding a New Problem

1. Add your implementation file under `problems/` (or an appropriate subfolder).
2. Write a matching test under `test/`.
3. Ensure the test passes:

```sh
npm test
```

## 📌 Notes

- Files in `problems/` are mostly standalone; they can typically be run directly with Node.
- Feel free to refactor existing solutions or add additional comments / edge-case handling.

## License

MIT
