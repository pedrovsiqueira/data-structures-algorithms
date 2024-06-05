class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return false;
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (!this.root) {
      return false;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return true;
      }
      if (value > current.value) {
        if (!current.right) {
          return false;
        }
        current = current.right;
      } else {
        if (!current.left) {
          return false;
        }
        current = current.left;
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(15);
tree.insert(9);
tree.insert(6);
tree.insert(12);
tree.insert(33);

console.log(tree.find(33));

console.log(tree);
