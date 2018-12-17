// String.repeat #1
let b = "wooh" + "oo".repeat(50);
console.log(b);

// String.repeat - template literal #2
let c = `wooh${"oo".repeat(50)}`;
console.log(c);

// String.startsWith
console.log("butterfly".startsWith('butter')); // true
console.log("butterfly".startsWith('Butter')); // false

// String.endsWith
console.log("butterfly".endsWith('fly')); // true
console.log("butterfly".endsWith('Fly')); // false

// String.includes
console.log("butterfly".includes('fly')); // true
console.log("butterfly".includes('Fly')); // false
console.log("butterfly".includes('tt')); // true
