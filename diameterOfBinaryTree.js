var diameterOfBinaryTree = function(root) {
  let maxValue = 0;
  getMaxDepth(root);
  return maxValue;

  function getMaxDepth(root) {
    debugger;
    if (!root) {
      return 0;
    }
    let left = getMaxDepth(root.left);
    let right = getMaxDepth(root.right);
    //if left + right + 1 < maxValue then we exclude the current node
    maxValue = Math.max(maxValue, left + right) //final node
    return Math.max(0, 1 + left, 1 + right); //prune other nodes to max left or right
  }

};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
// root.left.left.left = new TreeNode(6);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)) //return 3 [4,2,1,3] or [5,2,1,3]