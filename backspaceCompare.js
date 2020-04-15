var backspaceCompare = function(S, T) {
  const newS = [];
  const newT = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '#') {
      newS.pop()
    } else {
      newS.push(S[i])
    }
  }

  for (let i = 0; i < T.length; i++) {
    if (T[i] === '#') {
      newT.pop()
    } else {
      newT.push(T[i])
    }
  }
  debugger;
  return newS.join('') === newT.join('');
};

// console.log(backspaceCompare("ab#c", "ad#c")) //true
// console.log(backspaceCompare("ab##", "c#d#")) //true
// console.log(backspaceCompare("a##c", "#a#c")) //true
// console.log(backspaceCompare("a#c", "b")) //false
console.log(backspaceCompare("xywrrmp", "xywrrmu#p")) //true


// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".