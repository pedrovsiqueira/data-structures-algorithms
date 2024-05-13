const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (nums[middle] === target) {
      return middle;
    }

    if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }

  //   let result;

  //   if(left === 0) {

  //   }
  console.log({ left, right, middle });

  return -1;
};

// console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
