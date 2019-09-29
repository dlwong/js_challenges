/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  const final = [];
  const powerSize = Math.pow(str.length,2);

  for (let i = 0; i < powerSize; i++){
    const subset = [];
    for (let j = 0; j < str.length; j++){
      if (1 << j & i){
        subset.push(str[j]);
      }
    }
    final.push(subset.join(''))
  }
  return final;
};

console.log(powerSet("jump"));