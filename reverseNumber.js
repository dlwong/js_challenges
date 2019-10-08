const reverseNumber = (num) => {
  let result = 0;
  let x_remaining = Math.abs(num);

  while (x_remaining){
    result = result*10 + x_remaining%10;
    x_remaining = Math.floor(x_remaining/10);
  }

  return num < 0 ? -result : result;
} 

console.log(reverseNumber(1234))