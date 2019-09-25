function makeAnagrams(string){
  const final = [];

  (function makeAnagram(ana, str){

    if (str === ''){
      final.push(ana)
    }

    for (let i  = 0; i < str.length; i++){
      makeAnagram(ana+str[i], str.slice(0,i) + str.slice(i+1));
    }
  })('',string)
  return final;
}

console.log(makeAnagrams('abc'))