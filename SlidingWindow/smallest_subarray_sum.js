// Problem Statement#
// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// Example 1:

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
// Example 2:

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
// Example 3:

// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1]
// or [1, 1, 6].

const smallest_subarray_sum = function (s, arr) {
  // start index at 0, this will mark the current start of the window
  let windowStart = 0;
  let minLength = Infinity;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // increase windowSum by next value each time
    windowSum += arr[windowEnd];

    // run a while loop, WHILE windowSum is greater than target sum
    // goal is to find smallest window greater than given sum
    while (windowSum >= s) {
      // if the difference between start and end is less than current min, then update minLength
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      // subtract window start
      windowSum -= arr[windowStart];
      // increase window start
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
};

console.log(
  `Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 8])}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`
);
