class Node {
    constructor(key, parent = null, value, rightChild = null, leftChild = null) {
       this.key = key;
         this.parent = parent;
         this.value = value;
         this.rightChild = rightChild;
         this.leftChild = leftChild;
   }