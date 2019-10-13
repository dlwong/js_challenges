// Sample Input 0:
// I am using HackerRank to improve programming
// am HackerRank to improve

// Sample Output 0:
// I
// using
// programming

// Explanation 0:
// The missing words are:
// 1. I
// 2. using
// 3. programming

// We add these words in order to the array ["I", "using", "programming"], then return this array as our answer. 

// Sample Input 1:
// I love programming
// programming

// Sample Output 1:
// I
// love

// Explanation 1:
// The missing words are:
// 1. I
// 2. love

// We add these words in order to the array ["I", "love"], then return this array as our answer. 

const missingWords = (s1,s2) => {
  const missing = [];
  const s = s1.split(' ');
  const t = s2.split(' ');

  s.forEach( word => {
    if (!t.includes(word)) missing.push(word);
  })

  return missing;

}

console.log(missingWords('I am using HackerRank to improve programming','am HackerRank to improve'))