function match(prefixes, numbers) {
//holder array
//sort pref in desc order

//loop through numbers
  //loop through pref
    //if pref substring of numbers
      //push into holder array
      //break
  //push '' if no match in holder array

//return final array

  const final = [];
  prefixes.sort((a,b) => b.length-a.length);

  for (let i = 0; i<numbers.length; i++){
    for (let j = 0; j<prefixes.length; j++){
      if (numbers[i].includes(prefixes[j])){
        final.push(prefixes[j]);
        break;
      }else if (j === prefixes.length-1){
        final.push('');
      }
    }
  }
  return final;
}

const pref = ['+1415123',
              '+1415000',
              '+1412',
              '+1510',
              '+1',
              '+44']

const numbers = ['+14151234567',
                  '+9990',
                  '+14151224983']

console.log(match(pref, numbers));

//answers
//+1415123
//
//+1