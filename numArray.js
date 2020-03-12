var NumArray = function(nums) {
  this.arr = [...nums]  
};

NumArray.prototype.sumRange = function(i, j) {
  return this.arr.slice(i,j+1).reduce((acc, curr) => acc+curr)
};


// Given nums = [-2, 0, 3, -5, 2, -1]

// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -
const n = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(n.sumRange(2,5))