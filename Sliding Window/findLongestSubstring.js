// Write a function called findLongestSubstring, which accepts a string and returns
// the length of the longest substring with all distinct characters.

const findLongestSubstring = (str) => {
  const collection = {};
  let longest = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (collection[char]) {
      start = Math.max(start, collection[char]);
    }

    longest = Math.max(longest, i - start + 1);
    collection[char] = i + 1;
  }

  return longest;
};

// findLongestSubstring(""); // 0
console.log(findLongestSubstring("rithmschool")); // 7
// findLongestSubstring("thisisawesome"); // 6
// findLongestSubstring("thecatinthehat"); // 7
// findLongestSubstring("bbbbbb"); // 1
// findLongestSubstring("longestsubstring"); // 8
// findLongestSubstring("thisishowwedoit"); // 6
