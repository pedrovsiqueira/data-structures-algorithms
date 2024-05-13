const productOfArray = (arr) => {
  let result = 1;

  const helper = (helperInput) => {
    if (helperInput.length === 0) {
      return;
    }

    result *= helperInput[0];
    helper(helperInput.slice(1));
  };

  helper(arr);
  return result;
};

console.log(productOfArray([1, 2, 3, 10]));
