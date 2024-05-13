// Implement a function called, areThereDuplicates which accepts a variable
// number of arguments, and checks whether there are any duplicates among
// the arguments passed in.  You can solve this using the frequency counter
// pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

const areThereDuplicates = (...args) => {
  const result = {};

  for (const arg of args) {
    if (result[arg]) return true;
    result[arg] = (result[arg] || 0) + 1;
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
console.log(areThereDuplicates("a")); // false
console.log(areThereDuplicates()); // false
