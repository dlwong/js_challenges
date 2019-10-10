var rob = function(nums) {
  let dp = new Array(nums.length+1);
  dp[1] = nums[0];
  dp[2] = Math.max(nums[0],nums[1]);
  
  for (let i = 3; i < nums.length+1; i++){
      dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i-1])
  }
  
  return dp[dp.length-1];
};

console.log(rob([1,2,3,1]));