var setZeroes = function(matrix) {
    //keep track of positions
    const row = new Set();
    const col = new Set();
    
    for (let i = 0; i<matrix.length; i++){ //loop through row
        for (let j = 0; j<matrix[i].length; j++){ //loop through each col
            if (matrix[i][j] === 0){
                row.add(i);
                col.add(j)
            }
        }
    }
    
     for (let x = 0; x<matrix.length; x++){ //loop through row
        for (let y = 0; y<matrix[x].length; y++){ //loop through each col
            if (row.has(x) || col.has(y)){
                matrix[x][y] = 0;
            }
        }
    }
    return matrix;
};

console.log(setZeroes([[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]]))

//   [[0,0,0,0],[0,0,0,4],[0,0,0,0],[0,0,0,3],[0,0,0,0]]