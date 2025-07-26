// Initial Solution
function mapToObject(arr) {
  return arr.map((item) => ({
    fullname: `${item.name} ${item.surname}`,
    id: item.id,
  }));
}

// Improve Solution

// Test Case
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = mapToObject(users);

usersMapped[0].id; // 1
usersMapped[0].fullName; // John Smith
