// Implement a function called countUniqueValues, which accepts
// a sorted Array, and counts the unique values in the Array. There
// can be no negative numbers in the Array, but it will always be sorted.

// const countUniqueValues = (value) => {
//   const result = {};
//   let left = 0;
//   let right = left + 1;

//   while (right < value.length) {
//     if (!result[value[left]]) {
//       result[value[left]] = 1;
//     }

//     if (!result[value[right]]) {
//       result[value[right]] = 1;
//     }

//     left++;
//     right++;
//   }

//   return Object.keys(result).length;
// };

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
