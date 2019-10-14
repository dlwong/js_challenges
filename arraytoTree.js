var BinarySearchTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};
  
BinarySearchTree.prototype.insert = function(val) {
    if (val < this.value) {
        if (this.left === null) {
            this.left = new BinarySearchTree(val);
        } else {
            this.left.insert(val);
        }
    } else if (val > this.value) {
        if (this.right === null) {
            this.right = new BinarySearchTree(val);
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