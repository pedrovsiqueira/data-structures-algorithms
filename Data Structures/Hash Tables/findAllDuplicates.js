// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice,
// return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

const findDuplicates = (nums) => {
  const hashTable = {};
  const result = [];

  for (const number of nums) {
    hashTable[number] = (hashTable[number] || 0) + 1;
    if (hashTable[number] === 2) {
      result.push(number);
    }
  }

  return result;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(findDuplicates([1, 1, 2]));
// console.log(findDuplicates([1]));
