const isValid = (s) => {
  const stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const c of s) {
    if (Object.values(mapping).includes(c)) {
      stack.push(c);
    } else if (mapping.hasOwnProperty(c)) {
      if (!stack.length || mapping[c] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid(")(){}"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("]"));