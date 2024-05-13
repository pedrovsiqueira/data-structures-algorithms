const power = (num, power) => {
  let result = 1;

  const calculatePower = (tempPower) => {
    if (tempPower === 0) {
      return;
    }

    result *= num;

    calculatePower(tempPower - 1);
  };

  calculatePower(power);

  return result;
};

console.log(power(2, 5));
