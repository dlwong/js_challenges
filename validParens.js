//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

var isValid = function(s) {

  if (s.length%2>0) return false;

  while (s.includes('{}') || s.includes('[]') || s.includes('()')){
    s = s.split('{}').join('').split('[]').join('').split('()').join('');
  }

  return !s;

  // const obj = {
  //   '(':')', 
  //   ')':'(', 
  //   '{':'}', 
  //   '}':'{', 
  //   '[':']',
  //   ']':'['
  // }

  // let str = s.split('');

  // let first = 0;
  // let last = str.length-1;



  // while (first<last){
  //   let left = str[first];
  //   let right = str[last];
    
  //   if( obj[left] !== right && str.indexOf(obj[left]) !== first+1 ) {
  //     return false;
  //   }
  //   if (str.indexOf(obj[left]) === first+1) {
  //     first+=2;
  //   }else {
  //     first++;
  //     last--;
  //   }
  // }
  //   return true;
};


//console.log(isValid("([)]")); //false
//console.log(isValid("{[]}")); //true
//console.log(isValid("()[]{}")); //true
//console.log(isValid("([)")); //false
console.log(isValid("(([]){})")); //true

