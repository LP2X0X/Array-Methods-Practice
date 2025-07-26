// Initial Solution
// function filterUnique(arr) {
//   let exist = [];
//   arr.map((item) => (exist.includes(item) ? null : exist.push(item)));
//   return exist;
// }

// Improve Solution
function filterUnique(arr) {
  // This is pretty clever, the filter method check each item and its index
  // Since indexOf only return the index of the first item it found
  // all later instance of that index will return false
  // which in turn exclude it in the filterd array of unique item
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Test Case
let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

let x = filterUnique(strings); // Hare, Krishna, :-O
x;
