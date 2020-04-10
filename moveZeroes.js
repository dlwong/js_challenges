var moveZeroes = function(nums) {
  debugger;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] === 0) {
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
      }
    }
  }
  return nums;
};

console.log(moveZeroes([0,1,0,3,12])) //[1,3,12,0,0]