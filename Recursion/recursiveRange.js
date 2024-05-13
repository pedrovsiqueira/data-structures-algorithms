const recursiveRange = (num) => {
  let total = 0;

  const helper = (numInput) => {
    if (numInput === 0) {
      return;
    }

    total += numInput;

    helper(numInput - 1);
  };

  helper(num);

  return total;
};

console.log(recursiveRange(10));
