var countElements = function(arr) {
  arr.sort();
  numObj = {};
  let count = 0;

  for (let num of arr) {
    numObj[num] = numObj[num] + 1 || 1;
  }

  for (let num of arr) {
    debugger;
    // if (numObj[num]) {
      // numObj[num]--;
      // let next = num + 1;

      if(numObj[num+1]) {
        // numObj[next]--;
        count++;
        // next = next + 1;
      }
    // }
  }

  return count;
};

console.log(countElements([1,2,3])) //2
// console.log(countElements([1,1,3,3,5,5,7,7])) //0
// console.log(countElements([1,3,2,3,5,0])) //3
// console.log(countElements([1,1,2,2])) //2
// console.log(countElements([1,1,2])) //2