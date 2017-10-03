class Node {
    constructor(key, parent = null, value, rightChild = null, leftChild = null) {
        this.key = key;
        this.parent = parent;
        this.value = value;
        this.rightChild = rightChild;
        this.leftChild = leftChild;

        find(key) {
            if (this.key == key) {
                console.log('EXISTE');
                return this;
            } else {
                if (key > this.key) {
                    if (this.hasLeftChild()) {
                        return null
                    } else {
                        this.rightChild.find(key)
                    }
                } else {
                    if (this.hasRightChild()) {
                        return null
                    } else {
                        this.leftChild.find(key)
                    }
                }
            }
        }
    }
}