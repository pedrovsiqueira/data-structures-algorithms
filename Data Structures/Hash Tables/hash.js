// Problems with this
// Only hashes strings
// Not constant time - linear in key length
// Could be a little more random.
const hash = (key, arrayLength) => {
  //works for strings
  let total = 0;

  for (let char of key) {
    //map a to 1, b to 2, c to 3, etc.
    let value = char.charCodeAt(0) - 96;
    //use % because the total can be higher then the length of the array
    //to be inside of the bounds of the length for a valid array index.
    total = (total + value) % arrayLength;
  }

  return total;
};

const optimizedHash = (key, arrayLength) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  // hash functions take advantage of using prime numbers, it's easier
  // spread out the keys more uniformly.

  //max 100 chars, whichever is smaller, the key length or 100.
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }

  return total;
};

// console.log(hash("pink", 10));
// console.log(hash("orangered", 10));
// console.log(hash("cyan", 10));

//Creating a hashtable class.

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME_VALUE = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_VALUE + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }
  get(key) {
    const index = this._hash(key);
    const values = this.keyMap[index];

    if (values) {
      if (values.length === 1) {
        return values[0][1];
      }

      for (const item of values) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }

    return undefined;
  }
  print() {
    for (const item of this.keyMap) {
      console.log(item);
    }
  }
  values() {
    let valuesArr = [];

    for (const item of this.keyMap) {
      if (item) {
        for (const nestedItem of item) {
          if (!valuesArr.includes(nestedItem[1])) {
            valuesArr.push(nestedItem[1]);
          }
        }
      }
    }

    return valuesArr;
  }
  keys() {
    let keysArr = [];

    for (const item of this.keyMap) {
      if (item) {
        for (const nestedItem of item) {
          if (!keysArr.includes(nestedItem[0])) {
            keysArr.push(nestedItem[0]);
          }
        }
      }
    }

    return keysArr;
  }
}

const table = new HashTable(4);
table.set("white", "#fff");
table.set("pink", "#fea0e3");
table.set("yellow", "#fe0");
table.set("red", "#fe130d");
// table.set("red", "#fe130d");

// console.log(table.get("red"));
console.log(table.values());
console.log(table.keys());
// table.print();
