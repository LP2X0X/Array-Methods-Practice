// Initial Solution
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

// Improve Solution

// Test Case
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
arr[0].name; // John
arr[1].name; // Mary
arr[2].name; // Pete
