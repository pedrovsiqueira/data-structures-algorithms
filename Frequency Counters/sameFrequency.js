// Write a function called sameFrequency. Given two positive integers,
//find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

const sameFrequency = (num1, num2) => {
  const result = {};

  for (const num of num1.toString()) {
    result[num] = (result[num] || 0) + 1;
  }

  for (const num of num2.toString()) {
    if (result[num]) {
      result[num] -= 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
console.log(sameFrequency(1, 1)); // true
