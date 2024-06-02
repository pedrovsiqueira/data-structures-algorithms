class MyHashSet {
  constructor() {
    this.table = {};
  }

  add(key) {
    if (this.table[key]) {
      return;
    }

    this.table[key] = true;
    return null;
  }

  remove(key) {
    if (this.table[key]) {
      delete this.table[key];
      return;
    }

    return false;
  }
  contains(key) {
    if (this.table[key]) {
      return true;
    }

    return false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

var obj = new MyHashSet();
obj.add(1);
console.log({ obj });
console.log(obj.contains(1));
obj.remove(1);
console.log(obj.contains(1));

console.log({ obj });
