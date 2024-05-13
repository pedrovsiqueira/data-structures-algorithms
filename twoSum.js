// https://leetcode.com/problems/two-sum/description/

//First solution, O(n2)
// const twoSum = function (nums, target) {
//   for (let i = 0; i <= nums.length - 1; i++) {
//     for (let j = i + 1; j <= nums.length - 1; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// const nums = [2, 7, 11, 15];
// const target = 13;

// console.log(twoSum(nums, target));

//Second solution O(n) using hash table
const twoSum = function (nums, target) {
  const hash = {};
  for (let i = 0; i <= nums.length - 1; i++) {
    if (hash.hasOwnProperty(target - nums[i])) {
      return [hash[target - nums[i]], i];
    }

    hash[nums[i]] = i;
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
