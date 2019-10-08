var spiralOrder = function(matrix) {
  const results = [];

  if (matrix.length === 0) return results;
  
  let startRowIndex = 0,
        endRowIndex = matrix.length - 1,
        startColIndex = 0,
        endColIndex = matrix[0].length - 1;

  while (startRowIndex<=endRowIndex && startColIndex<=endColIndex){
    for (let i = startColIndex; i <= endColIndex; i++){
      results.push(matrix[startRowIndex][i]);
    }
    startRowIndex++;

    for (let j = startRowIndex; j <= endRowIndex; j++){
      results.push(matrix[j][endColIndex]);
    }
    endColIndex--;

    if (startRowIndex <= endRowIndex){
      for (let k = endColIndex; k >= startColIndex; k--){
        results.push(matrix[endRowIndex][k]);
      }
      endRowIndex--;
    }

    if (startColIndex <= endColIndex){
      for (let l = endRowIndex; l >= startRowIndex; l--){
        results.push(matrix[l][startColIndex]);
      }
      startColIndex++;
    }
  }

  return results;
};

console.log(spiralOrder([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]));