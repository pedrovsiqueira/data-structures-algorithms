/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = function (target, n) {
  const result = [];
  let count = 0;
  let i = 1;

  while (i <= target[target.length - 1]) {
    if (i === target[count]) {
      result.push("Push");
      count++;
    } else {
      result.push("Push", "Pop");
    }
    i++;
  }

  return result;
};

buildArray([1, 3], 3);
