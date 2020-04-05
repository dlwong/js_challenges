var lengthOfLIS = function(nums) {
	const lis = [];
  
  for (let i = 0; i < nums.length; i++) {
		lis.push(1);
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
	}
	return nums.length ? Math.max.apply(null, lis) : 0;
};

// console.log(lengthOfLIS([10,9,2,5,3,7,101,18])) //4
console.log(lengthOfLIS([10,9,2,5,3,4])) //3