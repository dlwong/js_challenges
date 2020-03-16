function findWords(board, words) {
  const result = [];

  function buildTrie() {
    const root = {};
    for (let word of words) {
      let node = root;
      for (let char of word) {
        if (!node[char]) {
          node[char] = {};
        }
        node = node[char];
      }
      node.word = word;
    }
    return root;
  }
  
  function search (node, i, j) {
    if (node.word) {
      result.push(node.word);
      node.word = null;
    }
    
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
      return;
    }

    if (!node[board[i][j]]) {
      return;
    }

    const c = board[i][j];
    board[i][j] = '#';
    search(node[c], i + 1, j);
    search(node[c], i - 1, j);
    search(node[c], i, j + 1);
    search(node[c], i, j - 1);
    board[i][j] = c;
  }
  
  const root = buildTrie();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, i, j);
    }
  }
  return result;
}

console.log(findWords([
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
], ["oath","pea","eat","rain"]))