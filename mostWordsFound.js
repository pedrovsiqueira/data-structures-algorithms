const mostWordsFound = function (sentences) {
  let largest = 1;

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    if (sentences[i].split(" ").length > largest) {
      largest = sentences[i].split(" ").length;
    }
  }

  return largest;
};

console.log(
  mostWordsFound([
    "w jrpihe zsyqn l dxchifbxlasaehj",
    "nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom",
    "xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg",
    "krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm",
    "rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr",
    "o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk",
    "hrvh efqvjilibdqxjlpmanmogiossjyxepotezo",
    "qstd zui nbbohtuk",
    "qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc",
  ])
);
