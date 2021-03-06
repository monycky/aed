class Node {
    constructor(key, parent = null, value, rightChild = null, leftChild = null) {
        this.key = key;
        this.parent = parent;
        this.value = value;
        this.rightChild = rightChild;
        this.leftChild = leftChild;
    }
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

    add(node) {
        if (node.key > this.key) {
            if (!this.rightChild) {
                this.rightChild = node;
            } else {
                this.rightChild.add(node);
            }
        } else {
            if (!this.leftChild) {
                this.leftChild = node;
            } else {
                this.leftChild.add(node);
            }
        }
    }


    remove(key) {
        let foundIt = this.find(key);
        if (foundIt != null) {
            if (foundIt.isLeaf()) {
                if (foundIt.isLeftChild()) {
                    fouindIt.parent.leftChild = null;
                } else {
                    foundIt.parent.rightChiuld = null;
                }

                foundIt.parent = null;

            } else if (foundIt.hasBothChildren()) {

            } else {
                if (foundId.isLeaftChild()) {
                    if (foundIt.hasLeftChild()) {
                        foundIt.parent.leftChild = foundIt.leftChild;
                        foundIt.leftChild.parent = foundIt.parent;
                        found.leftChild = null;
                    } else {
                        foundIt.parent.leftChild = foundIt.rightChild;
                        foundIt.rightChild.parent = foundIt.parent;
                        found.rightChild = null;
                    }
                    foundIt.parent = null;
                } else {
                    if (foundIt.hasLeftChild()) {
                        foundIt.parent.rightChild = foundIt.leftChild;
                        foundIt.leftChild.parent = foundIt.parent;
                        foundIt.leftChild = null;
                    } else {
                        foundIt.parent.rightChild = foundIt.leftChild;
                        foundIt.rightChild.parent = foundIt.parent;
                    }

                    foundIt.parent = null;
                }
            }
        }
    }

    inOrder() {
        if (this.hasLeftChild()) {
            this.leftChild.inOrder();
        }
        console.log(this.key);
        if (this.hasRightChild) {
            this.rightChild.inOrder();
        }
    }

    preOrder() {
        console.log(this.key);
        if (this.leftChild !== null) {
            this.leftChild.preOrder();
        }
        if (this.rightChild !== null) {
            this.rightChild.preOrder();
        }
    } 

    posOrder() {
        if (this.leftChild !== null) {
            this.leftChild.posOrder();
        }
        if (this.rightChild !== null) {
            this.rightChild.posOrder();
        }
        console.log(this.key);
    }

    hasLeftChild() {
        return this.leftChild !== null;
    }

    hasRightChild() {
        return this.rightChild !== null;
    }
    
    hasBothChildren() {
        return (this.leftChild !== null && this.rightChild !== null);
    }

    isLeaf() {
        return (this.leftChild == null && this.rightChild == null);
    }

    isLeftChild() {
        return (this.parent !== null && this.parent.leftChild !== null);
    }

    isRightChild() {
        return (this.parent !== null && this.parent.rightChild !== null);
    }

    minimum() {
        let min = this;
        while (min.hasLeftChild()) {
            min = min.leftChild;
        }
        return min;
    }

    maximum() {
        let max = this;
        while (max.hasRightChild()) {
            max = max.rightChild;
        }
        return max;
    }

    size() {
        //start with 1 
        let total = 1;

        if (this.leftChild !== null) {
            total = total + this.leftChild.size();
        }
        if (this.rightChild !== null) {
            total = total + this.rightChild.size();
        }
        return total;
    }

    sum() {
        let soma = this.key;

        if (this.leftChild !== null) {
            soma = soma + this.leftChild.sum();
           
        }
        if (this.rightChild !== null) {
            soma = soma + this.rightChild.sum();
        }
        return soma;
    }
}



