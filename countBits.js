var countBits = function(num) {
  var arr = [0, 1, 1];
  
  for (var i=3; i<=num; i++){
    var even = 0;
    var temp = i;
    var odd = 0;
    if((i/2) !== Math.floor(i/2)){
      even +=1;
      temp = i-1;
    }
      odd = arr[temp/2];
      arr.push(even + odd);
    
  }
  
  return arr.slice(0, num+1);
};

console.log(countBits(5))

// var countBits = function(num) {
//   let bits = [];
//   for (let i = 0; i <= num; i++)
//       // remove 0 from bits
//       bits.push(Number(i).toString(2).replace(/0/g, '').length);
//   return bits;
// };