var productExceptSelf = function(nums) {
  const result = [];  
  let prod = 1;
  let j = 1;
  let i = 0;

  while (i < nums.length && j < nums.length+1){
    if (j === nums.length){
      result.push(prod);
      i++;
      j = 0;
      prod = 1;
    }else if (i !== j){
      prod *= nums[j];
      j++;
    }else {
      j++;
    }
  }

  return result;
};

console.log(productExceptSelf([1,2,3,4])) //[24,12,8,6]