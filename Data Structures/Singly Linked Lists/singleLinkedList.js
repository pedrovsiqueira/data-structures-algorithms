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
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;

    return this;
  }
}

const list = new SingleLinkedList();

list.unshift("Hello");
console.log(list);
list.unshift("There");
console.log(list);
list.unshift("Mate");
console.log(list);
