var pacificAtlantic = function(matrix) {
  let x = 0;
  let y = matrix.length-1;
  const result = [[x,y]];   

  while (x <= matrix.length-1 && y > 0) {
    x++;
    y--;
    result.push([x,y])
  } 
  return result;
};


const checkSurrounding = (matrix,x,y) => {
  debugger;
  const r = [];
  //check below
  if(x < matrix.length){
    if(matrix[x+1][y] >= matrix[x][y]){
      r.push([x,y])
    };
    checkSurrounding(x+1,y)
  }
  //check right
  if(y < matrix.length){
    if(matrix[x][y+1] >= matrix[x][y]){
      r.push([x,y])
    };
    checkSurrounding(x,y+1)
  }
  //check above
  if(x > 0){
    if(matrix[x-1][y] >= matrix[x][y]){
      r.push([x,y])
    };
    checkSurrounding(x-1,y)
  }
  //check left
  if(y < matrix.length){
    if(matrix[x][y-1] >= matrix[x][y]){
      r.push([x,y])
    };
    checkSurrounding(x,y-1)
  }
  return r;
}

// console.log(checkSurrounding(0,4))
console.log(checkSurrounding(
  [[1,2,2,3,5],
  [3,2,3,4,4],
  [2,4,5,3,1],
  [6,7,1,4,5],
  [5,1,1,2,4]
  ],1,3
));


// Given the following 5x5 matrix:

//   Pacific ~   ~   ~   ~   ~ 
//        ~  1   2   2   3  (5) *
//        ~  3   2   3  (4) (4) *
//        ~  2   4  (5)  3   1  *
//        ~ (6) (7)  1   4   5  *
//        ~ (5)  1   1   2   4  *
//           *   *   *   *   * Atlantic

// Return:

// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).