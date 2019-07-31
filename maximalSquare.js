// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Input: 
// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4

const maximalSquare = (matrix) => {
  if (!matrix.length) return 0;
  const temp = [matrix[0]];

  for (let i = 1; i<matrix.length; i++){
    const newArr = [];
    for (let j = 0; j<matrix[i].length; j++){
      if (j === 0 || matrix[i][j] === "0") {
        newArr.push(matrix[i][j])
      }else {
        let min = Math.min(temp[i-1][j],temp[i-1][j-1],newArr[j-1]);
        newArr.push(min+1);
      }
    }
    temp.push(newArr);
  }

  let max = 0;

  temp.forEach(x => {
    x.forEach(y =>{
    if (y>max) max = y;
    })
  });

  return max*max;
};

const arr = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0]
]

const arr1 = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1]
]

console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));

//[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]