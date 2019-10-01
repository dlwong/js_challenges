// General Statement: Given a pair of words (the first is the correct spelling and the second is the contestant’s spelling of the word) determine if the word is spelled correctly.

// The degree of correctness is as follows:
// CORRECT if it is an exact match
// ALMOST CORRECT if no more than 2 letters are wrong
// WRONG if 3 or more letters are wrong

// Input: The first line of the data set for this problem is an integer that represents the number of pairs of words in the list. Each word is on a separate line.

// Output: Output the contestant’s spelling of the word and the rating. All letters are upper case.

// The output is to be formatted exactly like that for the sample output given below.

// Assumptions: Words contain only upper case letters. The maximum word length is 10.

// Sample Input:
// 3
// SAMPLE
// SIMPLE
// THEIR
// THEIR
// WINDMILL
// WINDOWS

// Sample Output:
// SIMPLE IS ALMOST CORRECT
// THEIR IS CORRECT
// WINDOWS IS WRONG


const nameMatch = function (str1, str2) {
  let count = 0;

  for (let i = 0; i<str1.length; i++){
    if (str1[i] !== str2[i]){
      count++;
    }
  }

  count += Math.abs(str1.length-str2.length)

  if (count === 0) {
    return 'CORRECT';
  }else if(count > 3){
    return 'WRONG';
  }else if (count > 0){
    return 'ALMOST CORRECT';
  }

}

// console.log(nameMatch('SAMPLE','SIMPLE')); //ALMOST CORRECT
// console.log(nameMatch('THEIR','THEIR')); //CORRECT
// console.log(nameMatch('WINDMILL','WINDOWS')); //WRONG