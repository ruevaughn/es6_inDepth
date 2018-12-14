// Destructuring Assignment on Arrays #1
let z = [4, 5, 6];
let [four, five] = z;
console.log(four, five);


// Destructuring Assignment on Arrays #2
let animals = ["Simba", "Zazu", "Ed"];
let [lion, bird] = animals;
console.log(lion, bird);


// Destructuring Assignment on Objects #1
let king = { name: 'Mufasa', kids: 1};
let { name, kids } = king;
console.log(name, kids);


// Destructuring Assignment on Objects #2
// Use parenthesis so it's not considered a scoped block (see scoping earlier)
let son = { name: 'Simba', parents: 2};
let name, parents;
({ name, parents } = son;
console.log(name, parents);
