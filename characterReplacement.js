var characterReplacement = function (string, k) {
  let count = {};
  let start = 0;
  let maxCount = 0;
  let maxLength = 0;

  for (let end = 0; end < string.length; end++) {
    debugger;
    //expanding the window
    count[string[end]] = (count[string[end]] || 0 ) + 1;
    maxCount = Math.max(maxCount, count[string[end]]);
    //end-start+1 = size of the current window
    //maxCount = largest count of a single, unique character in the current window
    if (end - start + 1 - maxCount > k) {
        //shrinking the window  
        count[string[start]]--;
        start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

console.log(characterReplacement("AABABBA",1))