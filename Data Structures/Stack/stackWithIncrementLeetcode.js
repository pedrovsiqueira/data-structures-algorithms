class CustomStack {
  constructor(maxSize) {
    this.stack = new Array();
    this.maxSize = maxSize;
  }

  push(x) {
    if (this.stack.length === this.maxSize) {
      return;
    }
    this.stack.push(x);
  }

  pop() {
    return this.stack.pop() || -1;
  }

  increment(k, val) {
    const length = k < this.stack.length ? k : this.stack.length;

    if (length == 0) return;

    for (let i = 0; i < length; i++) {
      this.stack[i] += val;
    }
  }
}

var obj = new CustomStack(3);
obj.push(1);
obj.push(2);
obj.push(3);
obj.pop();
obj.push(4);

console.log({ obj });

obj.increment(2, 100);
console.log({ obj });
