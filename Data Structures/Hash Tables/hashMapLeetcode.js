class MyHashMap {
  constructor() {
    this.keyMap = new Array(5);
  }

  _hash(key) {
    let total = 0;
    let PRIME_VALUE = 31;

    for (let i = 0; i < Math.min(key.toString().length, 100); i++) {
      let char = key.toString()[i];
      let value = char.charCodeAt(i) || 1;

      total = (total * PRIME_VALUE + value) % this.keyMap.length;
    }

    return total;
  }

  put(key, value) {
    const index = this._hash(key);
    const exists = this.get(key);

    if (exists > 0) {
      for (const item of this.keyMap[index]) {
        if (item[0] === key) {
          item[1] = value;
        }
      }
      return;
    }

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      return -1;
    }

    for (const item of this.keyMap[index]) {
      if (item[0] === key) {
        return item[1];
      }
    }

    return -1;
  }
  remove(key) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      return -1;
    }

    this.keyMap[index] = this.keyMap[index].filter((item) => item[0] !== key);
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

const myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
console.log(myHashMap.get(2)); // return -1 (i.e., not found), The map is now [[1,1]]
