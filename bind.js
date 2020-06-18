// const foo = function() {
//   console.log(this.bar)
// }

// let baz = foo.bind({bar: 'hello'})

// baz() //hello


// Solution 2
Function.prototype.bind = function (context) {
  const fn = this;

  return function() {
    fn.call(context)
  }
}


// Solution 3
function bind(fn, context) {

  return function() {
    fn.apply(context, [...arguments])
  }
}