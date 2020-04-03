var insert = function(intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
  var prev = intervals[0]
  var res = [prev]
  for (var curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      res.push(curr)
      prev = curr
    }
  }
  return res
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))