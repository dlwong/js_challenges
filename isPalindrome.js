const isPalindrome = (s) => {
  if (s.length === 0) return true;

  const regex = /[a-z0-9]/i;
  let i = 0,
      j = s.length-1;

  s = s.toLowerCase();

  while (i < j) {
    if (!regex.test(s[i])){
      i++;
    }else if (!regex.test(s[j])){
      j--;
    }else if (s[i++] !== s[j--]) {
      return false;
    }
  }
  return true;
}


console.log(isPalindrome("A man, a plan, a canal: Panama")); //true