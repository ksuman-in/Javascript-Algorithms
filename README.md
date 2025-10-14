# Javascript-Algorithms

A collection of JavaScript implementations for classic algorithms and data structures, including solutions to popular coding problems from platforms like LeetCode.

## Project Structure

```
Javascript-Algorithms/
├── index.js
├── problems/
│   ├── sort/
│   │   ├── bubble.js
│   │   ├── insertion.js
│   │   ├── merge.js
│   │   └── quick.js
│   ├── search/
│   │   ├── linear.js
│   │   └── binary.js
│   ├── queue/
│   │   ├── queue-array.js
│   │   └── queue-object.js
│   ├── recurciveFabonacci.js
│   ├── flatArray.js
│   ├── powerOfTwo.js
│   └── leetcode/
│       ├── easy/
│       │   ├── twoSum.js
│       │   ├── houseRobber.js
│       │   ├── maximumSubArray.js
│       │   ├── mergeTwoSortedLinklist.js
│       │   ├── twoSumSortedArray.js
│       │   └── anagram.js
│       ├── array-string/
│       │   ├── closestToZero.js
│       │   ├── isSubSequence.js
│       │   └── mergeStringAlternative.js
│       ├── largestKthSum.js
│       ├── longestStringPrefix.js
│       ├── middleValue.js
│       ├── palindrom.js
│       └── productExceptSelf.js
├── test/
│   ├── problems/
│   │   ├── flatArray.test.js
│   │   └── recurciveFabonacci.test.js
│   └── search/
│       ├── linear.test.js
│       └── binary.test.js
├── README.md
└── package.json
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run tests:**
   ```sh
   npm test
   ```

3. **Run an algorithm file:**
   ```sh
   node problems/sort/quick.js
   ```

## Algorithms Included

- **Sorting:** Bubble, Insertion, Merge, Quick
- **Searching:** Linear, Binary (iterative & recursive)
- **Data Structures:** Queue (array/object)
- **Recursion:** Fibonacci, Flat Array
- **LeetCode Problems:** Two Sum, House Robber, Maximum Subarray, Anagram, Merge Two Sorted Lists, Product Except Self, etc.

## Example Usage

```js
// Bubble Sort
const bubbleSort = require('./problems/sort/bubble');
console.log(bubbleSort([5, 2, 9, 1, 5, 6]));

// Queue Example
const Queue = require('./problems/queue/queue-array');
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // 10
```

## Contributing

Pull requests are welcome! Feel free to submit new algorithms or improvements.

## License

MIT