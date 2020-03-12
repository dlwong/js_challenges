// Given a 2d grid map of '1's (land) and '0's (water)

var numIslands = function(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1'){
        debugger;
        markIslands(i,j);
        count++;
      }
    }
  }

  function markIslands(row,col){
    grid[row][col] = 0;

    if (row < grid.length - 1 && grid[row+1][col] === '1'){
      markIslands(row+1,col);
    }
    if (row > 0 && grid[row-1][col] === '1'){
      markIslands(row-1,col);
    }
    if (col < grid[0].length -1 && grid[row][col+1] === '1'){
      markIslands(row,col+1);
    }
    if (col > 0 && grid[row][col-1] === '1'){
      markIslands(row,col-1);
    }
  }
  return count;
};



console.log(numIslands([
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
]));