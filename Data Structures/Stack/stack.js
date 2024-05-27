class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
    }

    return (this.length += 1);
  }
  pop() {
    if (this.length === 0) {
      return null;
    }

    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = temp.next;
    this.length -= 1;

    return temp.val;
  }
  top() {
    return this.first;
  }
  isEmpty() {
    return !this.length;
  }
  size() {
    return this.length;
  }
}

const stack = new Stack();

stack.push(12);
stack.push(14);
stack.push(15);
console.log(stack.top());
console.log(stack.isEmpty());
console.log(stack.size());
