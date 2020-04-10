var singleNumber = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  
  const obj = {};

  for (const num of nums) {
    obj[num] = obj[num] + 1 || 1;  
  }

  for (const key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};

console.log(singleNumber([4,1,2,1,2])) //4