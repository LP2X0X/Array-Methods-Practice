// Initial Solution
// Fisher-Yates shuffle
//The idea is to walk the array in the reverse order and swap each element with a random one before it
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Improve Solution

// Test Case
let testCase = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  312: 0,
  321: 0,
};

for (let i = 1; i < 1000000; i++) {
  let arr = [1, 2, 3];
  shuffle(arr);

  testCase[arr.join()]++;
}

// show counts of all possible permutations
for (let key in count) {
  `${key}: ${count[key]}`;
}
