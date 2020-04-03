/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.numArray = [];  
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  const bs = n => {
    debugger;
    let start = 0;
    let end = this.numArray.length;
    while (start < end){
      let mid = Math.floor((start + end) / 2);
      if (n > this.numArray[mid]) {
        start = mid+1;
      }
      else {
        end = mid;
      }
    }
    this.numArray.splice(start,0,n);
  }
  if (this.numArray.length === 0) this.numArray.push(num);
  else bs(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.numArray.length === 0) {
      return 0;
    }
    if (this.numArray.length === 1) {
      return this.numArray[0];
    }
    if (this.numArray.length % 2 === 0) {
       const mid = this.numArray.length/2;
      return (this.numArray[mid - 1] + this.numArray[mid])/2
    }
    const mid = Math.floor(this.numArray.length/2);
    return this.numArray[mid];
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
 */
var obj = new MedianFinder()
debugger;
obj.addNum(6)
obj.addNum(10)
// var param_2 = obj.findMedian()
// console.log(param_2) //1.5
obj.addNum(2)
var param_2 = obj.findMedian()
console.log(param_2) //2