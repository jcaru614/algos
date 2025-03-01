// Hash function in Javascript is any function that takes input as arbitrary size data and produces output as fixed-size data.
// the returned value of the hash function is called hash code, hash, or hash value.
// In hashing, all the operations like inserting, searching, and deleting can be performed in O(1) i.e. constant time.

// Collisions -  when a hash function generates the same index for more than one key. Collisions are a problem because
// every slot in a hash table is supposed to store a single element.
// Seperate Chaining - store data at same spot with nested data structure
// Linear Probing - Look ahead for the next empty spot

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return this.keyMap;
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    var keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
  values() {
    var valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
console.log(ht.set('maroon', '#800000'));
console.log(ht.set('yellow', '#FFFF00'));
console.log(ht.set('olive', '#808000'));
console.log(ht.set('salmon', '#FA8072'));
console.log(ht.set('lightcoral', '#F08080'));
console.log(ht.set('mediumvioletred', '#C71585'));
console.log(ht.set('plum', '#DDA0DD'));
console.log('set => ', ht.get('plum'));
console.log('keys => ', ht.keys());
console.log('values => ', ht.values());
console.log(ht);
