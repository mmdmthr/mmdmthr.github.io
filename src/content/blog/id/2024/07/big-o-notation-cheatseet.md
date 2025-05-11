---
title: 'Big O Notation Cheatseet'
pubDate: 2024-07-13
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

|Notation   |Name   |Description   |Example (Time complexity)   |
|---|---|---|---|
|  O(1) | Constant complexity   | The time and space consumed is consistent regardless of input size   | Retrieving a value from a hash table given a specific key   |
| O(log n)   | Logarithmic complexity   | The time and space consumed grows logarithmically with the input size   | Binary search on a sorted array   |
|O(n)   | Linear complexity   | The time and space consumed grows in direct proportion to the input size   | Searching for a single element in an array (looping over an array)   |
| O(n log n)   | Linearithmic complexity  | The time and space consumed grows proportionally to n log n (where n is the size of the input)   | Efficient sorting algorithms like quicksort  |
| O(n^2)  | Quadratic complexity  | The time and space consumed grows with the square of the input size   | simple sorting algorithms like bubble sort. looping over an array, and comparing the current element with all other elements in the array   |
| O(n^3)  | Cubic complexity  | The time and space consumed grows with the cube of the input size  | Triple nested loops   |
| O(2^n)  | Exponential complexity   | The time and space consumed doubles with eacch increment to the input size   | Recursive calculation if Fibonacci numbers   |
| O(n!)   | Factorial complexity   | The time and space consumed grows factorially to the size of the input   | Solving the traveling salesman problem with brute force   |