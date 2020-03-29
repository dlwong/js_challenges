function reverseWords(wordArray) {

  function swap( a, b) {
    const temp = wordArray[a];
    wordArray[a] = wordArray[b];
    wordArray[b] = temp;
  }

  wordArray = wordArray.join('').split(' ');

  let leftIndex = 0;
  let rightIndex = wordArray.length - 1;

  while (leftIndex < rightIndex) {
    swap(leftIndex, rightIndex);
    leftIndex++;
    rightIndex--;
  }

  return wordArray.join(' ').split('');
  // return wordArray.split('');
}


const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'