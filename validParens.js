//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// var isValid = function(s) {

//   if (s.length%2>0) return false;

//   while (s.includes('{}') || s.includes('[]') || s.includes('()')){
//     s = s.split('{}').join('').split('[]').join('').split('()').join('');
//   }

//   return !s;
// }
 
var isValid = function(s) {
  const stack = [];

  for (let c of s) {
    if (c === '{') {
      stack.push('}');
    }
    else if (c === '[') {
      stack.push(']');
    }
    else if (c === '(') {
      stack.push(')');
    }
    else if (c !== stack.pop()){
      return false;
    }
  }
  return stack.length === 0;
}

//console.log(isValid("([)]")); //false
//console.log(isValid("{[]}")); //true
//console.log(isValid("()[]{}")); //true
//console.log(isValid("([)")); //false
console.log(isValid("(([]){})")); //true

