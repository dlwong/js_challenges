var maxSubArray = function(nums) {
  const dp = new Array(nums.length);
  dp[0] = nums[0];

  // if (nums.length === 1) {
  //   return nums[0];
  // }

  for (let i = 1 ; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 1], nums[i]);
    debugger;
  }

  return Math.max(...dp);
};


// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) //6
console.log(maxSubArray([-1])) //-1
// console.log(maxSubArray([-2, -1])) //-1


// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.