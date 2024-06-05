/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (!obj.length && !Object.keys(obj).length) {
    return true;
  }

  return false;
};

console.log(isEmpty({ x: 5, y: 42 }));
console.log(isEmpty({}));
console.log(isEmpty([null, false, 0]));
