//https://leetcode.com/problems/roman-to-integer/description/

const table = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (table[s[i]] < table[s[i + 1]]) {
      total += table[s[i + 1]] - table[s[i]];
      i++;
    } else {
      total += table[s[i]];
    }
  }

  return total;
};

console.log(romanToInt("MCMXCIV"));
