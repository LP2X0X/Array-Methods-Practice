// Initial Solution
function filterRange(arr, a, b) {
  // filter return new array
  return arr.filter((item) => item >= a && item <= b);
}

// Improved Solution

// Test Case
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
filtered; // 3,1 (matching values)
