function vanity(codes, numbers) {
  //create final array

  //loop through codes list
    //loop through characters of each code
      //concat the letter value
    //loop through number list
      //if value is a substring
        //push into final array
  
  //return final array

  const results = [];

  for (let i = 0; i<codes.length; i++){
    let tempArr = '';
    for (let j = 0; j<codes[i].length; j++){
      tempArr += mapping[codes[i][j]];
    }
    for (let k = 0; k<numbers.length; k++){
      if (numbers[k].includes(tempArr)) results.push(numbers[k])
    }
  }
  
  return results;
}
// const mapping = {'2': [A,B,C],
//                 '3': [D,E,F],
//                 '4': [G,H,I],
//                 '5': [J,K,L],
//                 '6': [M,N,O],
//                 '7': [P,Q,R,S],
//                 '8': [T,U,V],
//                 '9': [W,X,Y,Z]};

const mapping = {A:2,
B:2,
C:2,
D:3,
E:3,
F:3,
G:4,
H:4,
I:4,
J:5,
K:5,
L:5,
M:6,
N:6,
O:6,
P:7,
Q:7,
R:7,
S:7,
T:8,
U:8,
V:8,
W:9,
X:9,
Y:9,
Z:9}



                



const codes = ['TWLO',
'CODE',
'HTCH']

const numbers = ['+17474824380',
'+14157088956',
'+919810155555',
'+15109926333',
'+1415123456']

const answer = ['+14157088956',
'+15109926333',
'+17474824380']

console.log(vanity(codes, numbers))