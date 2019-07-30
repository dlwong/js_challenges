const flipMatrix = (matrix) => {
 matrix = matrix.reverse();

 for (let i = 0; i<matrix.length; i++){
   for (let j = 0; j<matrix[i].length; j++){
    if (i !== j){
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i]; 
      matrix[j][i] = temp; 
    }
   }
 }
 return matrix;
 
}

let m = [[7,8,9],
         [2,3,4],
         [1,5,0]];

console.log(flipMatrix(m));