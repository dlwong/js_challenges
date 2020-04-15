/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.ordered = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    this.ordered.push(x);
    this.ordered.sort((a,b) => a - b);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const temp = this.stack.pop();
    this.ordered.splice(this.ordered.indexOf(temp), 1)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];  
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.ordered[0];
};

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
// obj.getMin();   //returns -3
obj.pop();
// obj.top();     //returns 0
// obj.getMin();   //returns -2
console.log(obj.top())
/** 
 * Your MinStack object will be instantiated and called as such:
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */