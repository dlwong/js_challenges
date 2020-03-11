class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var invertTree = function(root) {
  if(!root){
    return root;
  }
  debugger;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root;
};

const a = new Node(4);
const b = new Node(2);
const c = new Node(7);
const d = new Node(1);
const e = new Node(3);
const f = new Node(6);
const g = new Node(9);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log(invertTree(a))