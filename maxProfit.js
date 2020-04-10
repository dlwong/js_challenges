var maxProfit = function(prices) {
  let maxProfit = -Infinity;
  let minPrice = Infinity;
  let maxProfit1 = -Infinity;
  let minPrice1 = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else if (maxProfit === -Infinity){
      maxProfit = prices[i] - minPrice;
      minPrice = Infinity;
    } else if(minPrice < prices[i]) {
      maxProfit += prices[i] - minPrice;
      minPrice = Infinity;
    }
  }

  for (let i = 0; i < prices.length; i++) {
    if (minPrice1 > prices[i]) {
      minPrice1 = prices[i];
    } else if (maxProfit1 < prices[i] - minPrice1){
      maxProfit1 = prices[i] - minPrice1;
    }
  }


  if (maxProfit === -Infinity){
    return 0;
  }else if (maxProfit > maxProfit1){
    return maxProfit
  }else {
    return maxProfit1;
  }
};

// console.log(maxProfit([1,2,3,4,5])) //4
// console.log(maxProfit([7,1,5,3,6,4])) //7
console.log(maxProfit([7,6,4,3,1])) //0