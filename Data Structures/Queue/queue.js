// using arrays
// arr.unshift("FIRST")
// arr.unshift("SECOND")
// arr.unshift("THIRD")

// add to the beginning and remove from the end
// arr.pop() //first

//or push combined with shift

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //Add to the end
  enqueue(value) {
    const node = new Node(value);
    if (!this.size) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  //Remove from the beginning
  dequeue() {
    if (!this.first) {
      return null;
    }

    const prevFirst = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    }

    this.first = prevFirst.next;
    --this.size;
    return prevFirst;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue);
