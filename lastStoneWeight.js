var lastStoneWeight = function(stones) {
  for (let i = stones.length - 1; i > 0; i--) {
    stones.sort((a,b) => a - b);
    if (stones[i] === stones[i - 1]) {
      stones.pop();
      stones.pop();
    }else if (stones.length > 1) {
      const a = stones.pop();
      const b = stones.pop();
      stones.push(Math.abs(a - b));
    }
  }
  return stones.length > 0 ? stones[0] : 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1])) //1
// console.log(lastStoneWeight([2,2])) //0
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.