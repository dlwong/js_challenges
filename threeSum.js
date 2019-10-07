var threeSum = function(nums) {
    const final = [];

    // if (nums.length < 3) return final

    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++){
      // if (nums[i] > 0) break

      if (i > 0 && nums[i] === nums[i - 1]) continue

      let j = i + 1;
      let k = nums.length - 1;

      while (j < k){
        let partial_sum = nums[i] + nums[j] + nums[k];
        if (0 === partial_sum){
          final.push([nums[i], nums[j], nums[k]])
          while (nums[j] === nums[j + 1]) j++
          while (nums[k] === nums[k - 1]) k--
          j++;
          k--;
        }else if (partial_sum < 0){
          j++;
        }else if (partial_sum > 0){
          k--;
        }
      }
    }

    return final;
};

console.log(threeSum([-1,0,1,2,-1,-4])) //0

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

