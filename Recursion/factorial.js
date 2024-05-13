//Transformar em recursão

const factorial = (num) => {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
};

const factorialRecursion = (num) => {
  if (num === 1 || num === 0) return 1;

  return num * factorialRecursion(num - 1);
};

// console.log(factorial(1));
console.log(factorialRecursion(0));
