// Initial Solution
function camelize(str) {
  return str
    .split("-") // To get each word seperated
    .map(
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1) // Exclude the first word, then recreate the next words
    ) // Slice extract the array and create a new one
    .join("");
}

// Improved Solution

// Test Case
camelize("background-color") === "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";
