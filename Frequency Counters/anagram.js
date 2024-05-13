const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!lookup[str2[i]]) {
      return false;
    } else {
      lookup[str2[i]] -= 1;
    }
  }
  return true;
};

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("tar", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
