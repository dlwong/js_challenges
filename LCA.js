var lowestCommonAncestor = function(root, p, q) {
    if (p.val < root.val && root.value > q.val){
      return lowestCommonAncestor(root.left, p, q)  
    } 
    if (p.val > root.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q)
    }
    return root.left;
};

var BinarySearchTree = function(value) {

  var binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
  };

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(val) {
  if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
    // do nothing: The tree already contains this value
  }
};

function arrToBinary (arr){
  root1 = new BinarySearchTree(arr[0]);
  for (let i = 1; i < arr.length; i++){
    root1.insert(arr[i]);
  }

  return root1;
}

// console.log(arrToBinary([6,2,8,0,4,7,9,null,null,3,5]))

console.log(lowestCommonAncestor(arrToBinary([6,2,8,0,4,7,9,null,null,3,5]),2,4))