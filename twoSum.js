var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++){
      if(nums.indexOf(target-nums[i])>-1 && i !== nums.indexOf(target-nums[i])) return [i,nums.indexOf(target-nums[i])]
    }

};

//console.log(twoSum([2, 7, 11, 15], 9)) //[0,1]
console.log(twoSum([3, 2, 4], 6)); //[1,2]
//console.log(twoSum([-3,4,3,9],0)); //[0,2]
