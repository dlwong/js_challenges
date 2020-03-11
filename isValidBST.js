class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root, min=null, max=null){
  if (!root) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

//[2,1,3]
const a = new Node(2);
const b = new Node(1);
const c = new Node(3);
a.left = b;
a.right = c;

// [5,1,4,null,null,3,6]
// const a = new Node(5);
// const b = new Node(1);
// const c = new Node(4);
// const d = new Node(null);
// const e = new Node(null);
// const f = new Node(3);
// const g = new Node(6);
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;

console.log(isValidBST(a));