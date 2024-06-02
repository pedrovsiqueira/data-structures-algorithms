const createCounter = (init) => {
  let result = init;

  return {
    increment: () => ++result,
    reset: () => {
      return (result = init);
    },
    decrement: () => --result,
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
