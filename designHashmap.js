var _hash = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.storage = [];
  this.limit = 4;
};

MyHashMap.prototype.put = function(key, value) {
    const index = _hash(key,4);

    if (!this.storage[index]){
      this.storage[index] = [];
      this.storage[index].push([key, value])
    }else {
      for (let i = 0; i < this.storage[index].length; i++){
        if (this.storage[index][0] === key ){
          this.storage[index][1] = value;
          return;
        }
      }
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const index = _hash(key,4);

    if(!this.storage[index]) return;

    for (let i = 0; i < this.storage[index].length; i++){
      if(pair[0] === key) return pair[1]
    }
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const index = _hash(key,4);

    for (let i = 0; i < this.storage[index].length; i++){
      if (pair[0] === key){
        this.storage[index].splice(i, 1);
      }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
var obj = new MyHashMap()
obj.put('key','value')
console.log(obj)