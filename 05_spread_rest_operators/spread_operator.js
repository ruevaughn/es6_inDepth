// Spread Operator Example #1
let a = [20, 30, 40];
let b = [10, ...a, 50];
console.log(b);



// Spread Operator Example #2
let a = ['Dana', 'Erik', 'Frank'];
let b = ['Alice', 'Bob', 'Carl', ...a];
console.log(b)



// Spread Operator Example - 'rest' parameters #3
function collect(...rest) {
  console.log(a);
}

collect(1,2,3,4);
