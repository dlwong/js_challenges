var isHappy = function(n) {
  let str = "" + n;
  let strArr = str.split('');
  const numArr = [];
  
  if (n === 1 || n === 7) {
    return true;
  }

  if (str.length === 1) {
    return false;
  }

  for (const char of strArr) {
    const num = +char;
    numArr.push(num * num);
  }
  debugger;
  return isHappy(numArr.reduce((a,c) => a + c))
};

// console.log(isHappy(19)) //true
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

console.log(isHappy(9)) //true