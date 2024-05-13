//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

const strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

const haystack = "mississippi";
const needle = "issi";

console.log(strStr(haystack, needle));
