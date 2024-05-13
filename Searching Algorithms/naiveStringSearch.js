// Loop over the longer string
// Loop over the shorter string
// if the characters don't match, break out of the inner loop
// If the characters do match, keep going.
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

const naiveSerach = (long, short) => {
  let total = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i] !== short[j]) {
        break;
      }

      if (j === short.length - 1) {
        total += 1;
      }
      i++;
    }
  }
  return total;
};

console.log(naiveSerach("loiried loled", "ed"));
