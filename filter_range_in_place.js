// Initial Solution
function filterRangeInPlace(arr, a, b) {
  // Get index of all satisfy item
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// Improved Solution

// Test Case
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
arr;
