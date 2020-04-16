removeDuplicates = (str) => {
  //solution 1
  const strArr = str.split(' ');
  const set = new Set(strArr);

  // for (let word of strArr) {
  //   set.add(word);
  // }
  return [...set].join(' ');

  //solution 2
  // const strArr = str.split(' ');
  // const wordObj = {};

  // for (let word of strArr) {
  //   wordObj[word] = wordObj[word] + 1 || 1;
  // }

  // return Object.keys(wordObj).join(' ');
}

console.log(removeDuplicates("This is is a test test string")) //"This is a test string"