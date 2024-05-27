/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = (s) => {
  const stack = [];
  let count = 0;

  for (param of s) {
    if (param === "(") {
      stack.push(param);
    } else if (param === ")") {
      stack.pop();
    }
    count = stack.length > count ? stack.length : count;
  }

  return count;
};

maxDepth("(1+(2*3)+((8)/4))+1");
maxDepth("(1)+((2))+(((3)))");
maxDepth("()(())((()()))");
