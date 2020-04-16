flatten = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = acc.concat(flatten(curr))
    } else {
      acc.push(curr)
    }
    return acc;
  }, []);
  // const result = [];
  // toFlatten(arr);

  // function toFlatten(num) {
  //   if (typeof num === 'number') {
  //     result.push(num);
  //     return;
  //   }
  
  //   for (let el of num) {
  //     toFlatten(el);
  //   }
  // }

  // return result;

}

console.log(flatten([1, 2, [3, 4, [5, 6, 7], 8], 9, 10])) //[1,2,3,4,5,6,7,8,9,10]