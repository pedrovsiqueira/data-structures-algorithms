//Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const hashTable = {};

  for (let i = 0; i < s.length; i++) {
    hashTable[s[i]] = (hashTable[s[i]] || 0) + 1;
  }

  for (const [key, value] of Object.entries(hashTable)) {
    if (value === 1) {
      return s.indexOf(key);
    }
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
