var jump = function(nums) {
  let rangeEnd = 0;
  let jump = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
      //current point reaches end
      if (i === rangeEnd) {
        debugger;
        jump++;
        rangeEnd = farthest;
      }
  }
  return jump;
};

console.log(jump([2,3,1,1,4])) //2
// console.log(jump([1,2])) //1