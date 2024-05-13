// Write a function which takes in a string and returns
// counts of each character in the string

const charCount = (str) => {
  const count = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      count[char] = ++count[char] || 1;
    }
  }

  return count;
};

const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha (A-Z)
    !(code > 96 && code < 123) //lower alpha (a-z)
  ) {
    return false;
  }

  return true;
};

console.log(charCount("helLo my name Jeff"));
