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
│   ├── leetcode/              # LeetCode-style challenge solutions
│   │   ├── array-string/
│   │   ├── easy/
│   │   └── ...
│   ├── queue/                 # Queue implementations
│   ├── recursive/             # Recursion practice problems
│   ├── search/                # Search algorithms
│   ├── sort/                  # Sorting algorithms
│   ├── flatArray.js
│   ├── powerOfTwo.js
│   └── ...
└── test/                      # Automated tests
    ├── problems/
    └── search/
```

> Note: Some files and folders may be added over time as new problems are solved.

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

### LeetCode-style Problems
- Two Sum
- House Robber
- Maximum Subarray
- Merge Two Sorted Lists
- Product Except Self
- ...and more (see `problems/leetcode`)

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

---

## License

MIT
