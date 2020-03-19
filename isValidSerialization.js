var isValidSerialization = function(preorder) {
  const nodes = preorder.split(',');
  let diff = 1;

  for (let node of nodes) {
    diff--;
    debugger;
    if (diff < 0) {
      return false
    }
    if (node !== '#') {
      diff += 2;
    }
  }
    return diff === 0;

  // var stack = preorder[0] === '#' ? [] : [2];
	// preorder.split(',').slice(1).forEach(t => {
  //   if (!stack.length) stack.push(0);
	// 	stack[stack.length - 1] === 1 ? stack.pop() : stack[stack.length - 1]--;
	// 	if (t !== '#') stack.push(2);
	// });
	// return !stack.length;
};

// console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")) //true
console.log(isValidSerialization("1,#,#,1")) //false