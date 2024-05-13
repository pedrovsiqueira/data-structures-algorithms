// Write a recursive function called fib which accepts a number and returns the
// nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the
// sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and
// where every number thereafter is equal to the sum of the previous two numbers.

const fib = (num) => {
  let first = 1;
  let second = 1;
  let total = 0;

  const helper = (helperValue) => {
    if (helperValue === 1) {
      return;
    }

    total = first + second;
    first = second;
    second = total;

    helper(helperValue - 1);
  };

  helper(num);
  return first;
};

const fib2 = (n) => {
  if (n <= 2) return 1;
  return fib2(n - 1) + fib2(n - 2);
};

console.log(fib2(4));
// console.log(fib(35));
