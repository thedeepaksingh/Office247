const ArrayProblem = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description:
      "Find indices of two numbers such that they add up to a specific target. Return the indices of the two numbers in an array.",
    constraints: {
      n: "1 <= nums.length <= 10^4",
      num: " -10^9 <= nums[i] <= 10^9",
      target: " -10^9 <= target <= 10^9",
    },
    tags: ["Array", "Hash Map", "Searching"],
    author: "LeetCode",
    example: {
      input: "[2, 7, 11, 15], target = 9",
      output: "[0, 1]",
      explanation: "The two numbers at index 0 and 1, 2 + 7 = 9.",
    },
    hints: [
      "Use a hash map to store numbers and their indices while iterating through the array.",
      "For each element, check if the difference between the target and the current element exists in the hash map.",
    ],
    solution:
      "You can solve this problem in O(n) time complexity using a single pass through the array. The hash map helps store previously seen elements, enabling O(1) lookups for each new element.",
    time_complexity: "O(n)",
    space_complexity: "O(n)",
    edge_cases: [
      "If no such pair exists, return an empty list or `null`.",
      "Handle negative numbers and ensure that the correct pair is returned.",
    ],
    related_problems: ["3Sum", "Two Sum II - Input Array is Sorted", "4Sum"],
    additional_resources: [
      {
        title: "LeetCode Problem Page",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "GeeksforGeeks Article",
        link: "https://www.geeksforgeeks.org/two-sum-problem/",
      },
    ],
    rendersolution: "component1",
  },
];

export default ArrayProblem;
