class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.min = 0;
  }
}

class MinStack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    const prevNode = this.first;

    if (!this.size) {
      this.first = node;
      this.last = node;
      this.first.min = val;
    } else {
      this.first = node;
      this.first.next = prevNode;
    }

    if (prevNode?.min) {
      this.first.min = val < prevNode.min ? val : prevNode.min;
    }

    if (val < this.min) {
      this.min = val;
    }

    ++this.size;
  }

  pop() {
    if (!this.size) {
      return;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const prevFirst = this.first;
    this.first = prevFirst.next;

    --this.size;
  }

  top() {
    return this.first && this.first.value;
  }

  getMin() {
    return this.first?.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
obj.push(5);
obj.pop();
obj.pop();
obj.pop();
obj.pop();

console.log({ totalMin: obj.getMin(), obj });

// obj.pop();
// obj.pop();

// obj.push(-3);
// console.log(obj);

// console.log({ obj });
