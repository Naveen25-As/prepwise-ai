import type { Problem } from '../types/dsa'

/**
 * Sample DSA problem data.
 * This is initial sample data only — in production, this would come from a backend API.
 * Progress is tracked separately in localStorage.
 */
export const sampleDSAProblems: Problem[] = [
  {
    id: 'prob-1',
    title: 'Two Sum',
    topic: 'Arrays',
    difficulty: 'Easy',
    estimatedTime: '15 min',
    status: 'unsolved',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
  },
  {
    id: 'prob-2',
    title: 'Longest Substring Without Repeating Characters',
    topic: 'Strings',
    difficulty: 'Medium',
    estimatedTime: '30 min',
    status: 'unsolved',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
  },
  {
    id: 'prob-3',
    title: 'Maximum Subarray',
    topic: 'Arrays',
    difficulty: 'Medium',
    estimatedTime: '25 min',
    status: 'unsolved',
    description: 'Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.',
  },
  {
    id: 'prob-4',
    title: 'Merge Intervals',
    topic: 'Arrays',
    difficulty: 'Medium',
    estimatedTime: '35 min',
    status: 'unsolved',
    description: 'Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals.',
  },
  {
    id: 'prob-5',
    title: 'Valid Parentheses',
    topic: 'Stacks',
    difficulty: 'Easy',
    estimatedTime: '20 min',
    status: 'unsolved',
    description: 'Given a string s containing just the characters \'()\' \'{}\' and \'[]\', determine if the input string is valid.',
  },
  {
    id: 'prob-6',
    title: 'Binary Tree Level Order Traversal',
    topic: 'Trees',
    difficulty: 'Medium',
    estimatedTime: '30 min',
    status: 'unsolved',
    description: 'Given the root of a binary tree, return the level order traversal of its nodes\' values.',
  },
  {
    id: 'prob-7',
    title: 'Maximum Depth of Binary Tree',
    topic: 'Trees',
    difficulty: 'Easy',
    estimatedTime: '15 min',
    status: 'unsolved',
    description: 'Given the root of a binary tree, return its maximum depth.',
  },
  {
    id: 'prob-8',
    title: 'Climbing Stairs',
    topic: 'Dynamic Programming',
    difficulty: 'Easy',
    estimatedTime: '20 min',
    status: 'unsolved',
    description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.',
  },
  {
    id: 'prob-9',
    title: 'Valid Anagram',
    topic: 'Strings',
    difficulty: 'Easy',
    estimatedTime: '15 min',
    status: 'unsolved',
    description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
  },
  {
    id: 'prob-10',
    title: 'Kth Largest Element in an Array',
    topic: 'Arrays',
    difficulty: 'Medium',
    estimatedTime: '30 min',
    status: 'unsolved',
    description: 'Given an integer array nums and an integer k, return the kth largest element in the array.',
  },
  {
    id: 'prob-11',
    title: 'Word Search',
    topic: 'Backtracking',
    difficulty: 'Medium',
    estimatedTime: '40 min',
    status: 'unsolved',
    description: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid.',
  },
  {
    id: 'prob-12',
    title: 'Combination Sum',
    topic: 'Backtracking',
    difficulty: 'Medium',
    estimatedTime: '35 min',
    status: 'unsolved',
    description: 'Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.',
  },
  {
    id: 'prob-13',
    title: 'Subsets',
    topic: 'Backtracking',
    difficulty: 'Medium',
    estimatedTime: '30 min',
    status: 'unsolved',
    description: 'Given an integer array nums of unique elements, return all possible subsets (the power set).',
  },
  {
    id: 'prob-14',
    title: 'Contains Duplicate',
    topic: 'Arrays',
    difficulty: 'Easy',
    estimatedTime: '10 min',
    status: 'unsolved',
    description: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
  },
  {
    id: 'prob-15',
    title: 'Rotate Image',
    topic: 'Arrays',
    difficulty: 'Medium',
    estimatedTime: '30 min',
    status: 'unsolved',
    description: 'You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).',
  },
  {
    id: 'prob-16',
    title: 'Palindrome Linked List',
    topic: 'Linked Lists',
    difficulty: 'Easy',
    estimatedTime: '25 min',
    status: 'unsolved',
    description: 'Given the head of a singly linked list, return true if it is a palindrome or false otherwise.',
  },
  {
    id: 'prob-17',
    title: 'Valid Sudoku',
    topic: 'Arrays',
    difficulty: 'Medium',
    estimatedTime: '35 min',
    status: 'unsolved',
    description: 'Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the rules.',
  },
  {
    id: 'prob-18',
    title: 'Reverse Linked List',
    topic: 'Linked Lists',
    difficulty: 'Easy',
    estimatedTime: '20 min',
    status: 'unsolved',
    description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
  },
  {
    id: 'prob-19',
    title: 'Median of Two Sorted Arrays',
    topic: 'Arrays',
    difficulty: 'Hard',
    estimatedTime: '45 min',
    status: 'unsolved',
    description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
  },
  {
    id: 'prob-20',
    title: 'Trapping Rain Water',
    topic: 'Arrays',
    difficulty: 'Hard',
    estimatedTime: '50 min',
    status: 'unsolved',
    description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
  },
  {
    id: 'prob-21',
    title: 'N-Queens',
    topic: 'Backtracking',
    difficulty: 'Hard',
    estimatedTime: '45 min',
    status: 'unsolved',
    description: 'The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.',
  },
  {
    id: 'prob-22',
    title: 'Serialize and Deserialize Binary Tree',
    topic: 'Trees',
    difficulty: 'Hard',
    estimatedTime: '40 min',
    status: 'unsolved',
    description: 'Design an algorithm to serialize and deserialize a binary tree.',
  },
  {
    id: 'prob-23',
    title: 'Word Ladder',
    topic: 'Graphs',
    difficulty: 'Hard',
    estimatedTime: '45 min',
    status: 'unsolved',
    description: 'A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair differs by a single letter.',
  },
  {
    id: 'prob-24',
    title: 'Course Schedule',
    topic: 'Graphs',
    difficulty: 'Medium',
    estimatedTime: '35 min',
    status: 'unsolved',
    description: 'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.',
  },
  {
    id: 'prob-25',
    title: 'Implement Trie (Prefix Tree)',
    topic: 'Trees',
    difficulty: 'Medium',
    estimatedTime: '40 min',
    status: 'unsolved',
    description: 'A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.',
  },
]

/**
 * Extract unique topics from the problem list.
 */
export function getUniqueTopics(problems: Problem[]): string[] {
  const topics = new Set(problems.map((p) => p.topic))
  return Array.from(topics).sort()
}

/**
 * Extract unique difficulties from the problem list.
 */
export function getUniqueDifficulties(problems: Problem[]): string[] {
  const difficulties = new Set(problems.map((p) => p.difficulty))
  return Array.from(difficulties).sort()
}
