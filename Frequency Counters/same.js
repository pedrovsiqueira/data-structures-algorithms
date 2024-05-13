const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (item of arr1) {
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
  }

  for (item of arr2) {
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
  }

  for (key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }

    return true;
  }
  console.log(frequencyCounter1, frequencyCounter2);
};

console.log(same([1, 2], [1, 4]));
