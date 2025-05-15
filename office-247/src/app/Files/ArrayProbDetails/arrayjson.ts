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
    rendersolution: "TwoSumVisualizer",
    completionPercentage: "100",
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description:
      "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: 1) Open brackets are closed by the same type of brackets. 2) Open brackets are closed in the correct order.",
    constraints: {
      s: "1 <= s.length <= 10^4",
    },
    tags: ["Stack", "String"],
    author: "LeetCode",
    example: {
      input: '"()[]{}"',
      output: "true",
      explanation:
        "Each opening bracket has a corresponding closing bracket in the correct order.",
    },
    hints: [
      "Use a stack to keep track of opening brackets.",
      "Whenever you encounter a closing bracket, check the top of the stack for a matching opening bracket.",
    ],
    solution:
      "This problem can be solved using a stack. Iterate over each character, push opening brackets onto the stack, and pop when a corresponding closing bracket is found. If the stack is empty at the end, the string is valid.",
    time_complexity: "O(n)",
    space_complexity: "O(n)",
    edge_cases: [
      "An empty string is considered valid.",
      "The string must return false if any unmatched bracket exists or order is wrong.",
    ],
    related_problems: [
      "Longest Valid Parentheses",
      "Remove Invalid Parentheses",
    ],
    additional_resources: [
      {
        title: "LeetCode Problem Page",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "GeeksforGeeks Article",
        link: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",
      },
    ],
    rendersolution: "Validparenthesis",
    completionPercentage: "90",
  },
  {
    id: 3,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log(min(m,n))).",
    constraints: {
      m: "0 <= nums1.length <= 10^6",
      n: "0 <= nums2.length <= 10^6",
      element_range: "-10^6 <= nums1[i], nums2[i] <= 10^6",
    },
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    author: "LeetCode",
    example: {
      input: "nums1 = [1, 3], nums2 = [2]",
      output: "2.0",
      explanation: "The merged array is [1, 2, 3] and the median is 2.0.",
    },
    hints: [
      "Try to find the kth smallest element in the two arrays.",
      "Use binary search to partition the two arrays such that the elements on the left are less than or equal to the elements on the right.",
    ],
    solution:
      "Use binary search on the smaller array to find the correct partition. Compare left and right parts of both arrays to find the median efficiently.",
    time_complexity: "O(log(min(m, n)))",
    space_complexity: "O(1)",
    edge_cases: [
      "One array is empty.",
      "Arrays contain duplicate elements.",
      "Even and odd total length of combined arrays.",
    ],
    related_problems: [
      "Kth Smallest Element in a Sorted Matrix",
      "Median of a Row Wise Sorted Matrix",
    ],
    additional_resources: [
      {
        title: "LeetCode Problem Page",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        title: "GeeksforGeeks Article",
        link: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/",
      },
    ],
    rendersolution: "MedianOfTwoSortedArrays",
    completionPercentage: "0",
  },
  {
    id: 4,
    title: "Container With Most Water",
    difficulty: "Medium",
    description:
      "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines that together with the x-axis form a container that holds the most water.",
    constraints: {
      n: "2 <= height.length <= 10^5",
      "height[i]": "0 <= height[i] <= 10^4",
    },
    tags: ["Array", "Two Pointers", "Greedy"],
    author: "LeetCode",
    example: {
      input: "height = [1,8,6,2,5,4,8,3,7]",
      output: "49",
      explanation:
        "The maximum area is formed between lines at index 1 and 8 with height 8 and 7 respectively: min(8, 7) * (8 - 1) = 49.",
    },
    hints: [
      "Start with the widest container (left and right pointers at ends).",
      "Move the pointer pointing to the shorter line inward.",
      "Greedy strategy works because the area is limited by the shorter line.",
    ],
    solution:
      "Use two pointers starting at both ends of the array. Move the pointer with the shorter height inward, calculating the area at each step, and track the maximum.",
    time_complexity: "O(n)",
    space_complexity: "O(1)",
    edge_cases: [
      "All heights are the same.",
      "Heights are strictly increasing or decreasing.",
    ],
    related_problems: ["Trapping Rain Water", "Max Consecutive Ones"],
    additional_resources: [
      {
        title: "LeetCode Problem Page",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        title: "GeeksforGeeks Article",
        link: "https://www.geeksforgeeks.org/container-with-most-water/",
      },
    ],
    rendersolution: "ContainerWithMostWater",
    completionPercentage: "100",
  },
  {
    id: 5,
    title: "3Sum",
    difficulty: "Medium",
    description:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    constraints: {
      n: "3 <= nums.length <= 3000",
      num: "-10^5 <= nums[i] <= 10^5",
    },
    tags: ["Array", "Two Pointers", "Sorting"],
    author: "LeetCode",
    example: {
      input: "nums = [-1, 0, 1, 2, -1, -4]",
      output: "[[-1, -1, 2], [-1, 0, 1]]",
      explanation:
        "There are two unique triplets whose sum is 0. The result must not contain duplicates.",
    },
    hints: [
      "Sort the array first.",
      "Use a fixed pointer and two-pointer approach to find triplets.",
      "Avoid adding duplicate triplets by skipping duplicates.",
    ],
    solution:
      "Sort the array, then fix one number and use two pointers to find the other two. Move pointers inward while skipping duplicates. Continue until all possibilities are checked.",
    time_complexity: "O(n^2)",
    space_complexity: "O(1) (ignoring output space)",
    edge_cases: [
      "No valid triplets return empty list.",
      "All elements are zero (e.g., [0, 0, 0, 0]).",
      "Duplicates must be avoided in the result.",
    ],
    related_problems: ["Two Sum", "4Sum", "3Sum Closest"],
    additional_resources: [
      {
        title: "LeetCode Problem Page",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        title: "GeeksforGeeks Article",
        link: "https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/",
      },
    ],
    rendersolution: "ThreeSum",
    completionPercentage: "100",
  },
  {
    id: 6,
    title: "Move All Zeroes to End",
    difficulty: "Easy",
    description:
      "Given an array arr[] of non-negative integers, move all the 0s to the end of the array while maintaining the relative order of the non-zero elements. This operation must be done in-place without using extra space.",
    constraints: {
      n: "1 ≤ arr.length ≤ 10^5",
      arr: "0 ≤ arr[i] ≤ 10^5",
    },
    tags: ["Array", "Two Pointers", "In-place Operation"],
    author: "GeeksforGeeks",
    example: {
      input: "arr = [1, 2, 0, 4, 3, 0, 5, 0]",
      output: "[1, 2, 4, 3, 5, 0, 0, 0]",
      explanation:
        "There are three 0s in the array. They are moved to the end while maintaining the relative order of non-zero elements.",
    },
    hints: [
      "Use a two-pointer technique to maintain the position of the last non-zero element.",
      "Swap non-zero elements with zeros encountered earlier.",
      "Avoid using extra space for another array.",
    ],
    solution:
      "Iterate through the array, keeping track of the position to insert the next non-zero element. Swap elements when necessary to push zeroes to the end while preserving the order of non-zero elements.",
    time_complexity: "O(n)",
    space_complexity: "O(1)",
    edge_cases: [
      "All elements are non-zero (e.g., [10, 20, 30]) → no change.",
      "All elements are zero (e.g., [0, 0]) → no change.",
      "Array starts with zeroes (e.g., [0, 1, 2]) → zeroes should be moved to end.",
    ],
    related_problems: [
      "Remove Element",
      "Sort Array By Parity",
      "Segregate 0s and 1s",
    ],
    additional_resources: [
      {
        title: "GeeksforGeeks Article",
        link: "https://www.geeksforgeeks.org/move-zeroes-end-array/",
      },
      {
        title: "LeetCode Problem Page",
        link: "https://leetcode.com/problems/move-zeroes/",
      },
    ],
    rendersolution: "MoveZeroes",
    completionPercentage: "0",
  },
  {
    id: 7,
    title: "Conway’s Game of Life",
    difficulty: "Medium",
    description:
      "Given a 2D board representing the state of each cell (alive or dead), compute the next state of the board according to the rules of Conway’s Game of Life. The rules determine whether a cell lives, dies, or is born based on the number of live neighbors. The update must be done in-place with no extra space.",
    constraints: {
      m_n: "1 ≤ board.length, board[0].length ≤ 25",
      cell_value: "board[i][j] is 0 (dead) or 1 (alive)",
    },
    tags: ["Array", "Matrix", "Simulation", "In-place Operation"],
    author: "LeetCode",
    example: {
      input: "board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]",
      output: "[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]",
      explanation:
        "Each cell's next state is determined by the number of live neighbors. The board is updated simultaneously based on these rules.",
    },
    hints: [
      "Iterate over each cell and count its live neighbors.",
      "To keep it in-place, use temporary markers (like 2 for dead→live and -1 for live→dead).",
      "Apply the rules based on current states before converting temporary states back to final values.",
    ],
    solution:
      "Traverse the grid and for each cell, count its live neighbors (adjacent 8 directions). Mark transitions using temporary values (e.g., -1 for 1→0 and 2 for 0→1) to store both old and new states in place. After the first pass, do a second pass to finalize the updated values by converting temporary markers to 0 or 1.",
    time_complexity: "O(m * n)",
    space_complexity: "O(1) (excluding input and output)",
    edge_cases: [
      "All cells are dead → remain dead if no neighbors become alive.",
      "All cells are alive → some cells may die based on overpopulation.",
      "Single cell → always dies due to underpopulation.",
    ],
    related_problems: [
      "Game of Life - Infinite Board",
      "Set Matrix Zeroes",
      "Image Smoother",
    ],
    additional_resources: [
      {
        title: "LeetCode Problem Page",
        link: "https://leetcode.com/problems/game-of-life/",
      },
      {
        title: "GeeksforGeeks Article",
        link: "https://www.geeksforgeeks.org/conways-game-life-python-implementation/",
      },
    ],
    rendersolution: "GameOfLife",
    completionPercentage: "0",
  },
];

export default ArrayProblem;
