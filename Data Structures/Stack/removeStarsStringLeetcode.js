//https://leetcode.com/problems/removing-stars-from-a-string/description/

const removeStars = (s) => {
  const result = [];

  for (const char of s) {
    if (char !== "*") {
      result.push(char);
    } else {
      result.pop();
    }
  }

  return result.join("");
};
