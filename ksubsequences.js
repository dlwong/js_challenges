 function subSequences(arr, k) {
    let count = 0,
        left = 0,
        right = 0,
        total = 0;
    
    while (left < arr.length){
        while (right < arr.length){
            total += arr[right];
            console.log(left, right, total)
            if (total%k === 0) count++;
            right++;
        }
        left++;
        right = left;
        total = 0;
    }
    return count;
}

console.log(subSequences([5, 10, 11, 9, 5], 5));