/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
  constructor(nums) {
    this.data = nums;
  }
  /**
   * @return {number}
   */
  valueOf() {
    return this.data.reduce((acc, curr) => acc + curr, 0);
  }
  /**
   * @return {string}
   */
  toString() {
    return JSON.stringify(this.data);
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2);
//  obj1 + obj2; // 10
console.log(String(obj1), typeof String(obj1)); // "[1,2]"
//  String(obj2); // "[3,4]"

// console.log({ obj1, obj2 });
