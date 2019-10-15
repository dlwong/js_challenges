var longestPalindrome = function(s) {
    let res = "",
        cur = "";

    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < i + 2; j++) {
            let left = i;
            let right = j;
            while(left >= 0 && s[left] === s[right]){
                cur = s.substring(left, right + 1);
                if(cur.length > res.length) res = cur;
                left--;
                right++;
            }
        }
    }
    return res;
};

// console.log(longestPalindrome("babad")); //"bab"
console.log(longestPalindrome("cbbd")); //"bb"