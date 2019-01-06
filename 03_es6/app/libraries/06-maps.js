// Maps 1
let aMap1 = new Map();
let key_1 = "string_key";
let key_2 = { a: 'key' };
let key_3 = function() {};

aMap1.set(key_1, "return value for a string key");
aMap1.set(key_2, "return value for an object key");
aMap1.set(key_3, "return value for a function key");

// Maps 2
let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(numArr)

// Maps 3
let mapString = 'awehfkjashfaiuxcvkjasdawehfasduifasdfkja,sdfjahl';

let letters = new Map();
for (let i=0; i<mapString.length; i++) {
  let letter = mapString[i];
  if(!letters.has(letter)) {
    letters.set(letter, 1);
  } else {
    let letterLength = letters.get(letter) + 1;
    letters.set(letter, letterLength);
  }
}

export { aMap1, valMap, letters };
