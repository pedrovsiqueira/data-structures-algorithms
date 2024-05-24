// piece of data - val
// reference to the next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
    return this;
  }
  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }

    const current = this.head;
    this.head = current.next;
    this.length -= 1;

    if (!this.length) {
      this.tail = null;
    }

    return current;
  }
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;

    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter += 1;
    }

    return current;
  }
  set(val, index) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    const prevNode = this.get(index - 1);
    const newNode = new Node(val);
    const tempNext = prevNode.next;

    prevNode.next = newNode;
    newNode.next = tempNext;

    this.length += 1;

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const prevNode = this.get(index - 1);
    const nodeToRemove = prevNode.next;

    prevNode.next = nodeToRemove.next;
    this.length -= 1;

    return nodeToRemove;
  }
  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse() {
    //swap head and tail.
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SingleLinkedList();

list.push("13");
list.push("27");
list.push("32");
list.push("71");
list.print();
list.reverse();
list.print();
