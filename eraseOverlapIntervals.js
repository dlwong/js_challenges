var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a,b) => a[1]-b[1]);

  let count = 0;
  let i = 0
  
  while (i < intervals.length-1){
    debugger;
    if(intervals[i+1][0] < intervals[i][1]){
      intervals.splice(i+1,1);
      count++;
    }else{
      i++;
    }
  }
  return count;
};


console.log(eraseOverlapIntervals(
  [[1,2],[2,3],[3,4],[1,3]]
)); //1 
// [1,3] can be removed and the rest of intervals are non-overlapping.