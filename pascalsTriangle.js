const pascalsTriangle = (num) => {
  final = [[1],[1,1]];
  
  for (let i = 2; i<num; i++){
    let n = [];
    n.push(1);
    for (let j = 2; j<i+1; j++){
      n.push(final[i-1][j-2]+final[i-1][j-1]);
    }
    n.push(1);
    final.push(n);
  }
  return final;
}

console.log(pascalsTriangle(5));

