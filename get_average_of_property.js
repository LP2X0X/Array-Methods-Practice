// Initial Solution
function averageOfProperty(arr) {
  return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
}

// Improve Solution

// Test Case
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

getAverageAge(arr); // 28
