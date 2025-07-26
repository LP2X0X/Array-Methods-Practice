// Initial Solution
function mapToName(arr) {
  return arr.map((obj) => obj.name);
}

// Improve Solution

// Test Case
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = mapToName(users);

names; // John, Pete, Mary
