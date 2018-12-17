// Map
let values = [20, 30, 40];

// Map #1 - Call Function
let double = (n) => {
  return n*2;
}

let doubled1 = values.map(double);
console.log(doubled1);

// Map #2 - Function passed
let doubled2 = values.map((n) => n*2);
console.log(doubled2);

// Filter
let points = [7, 16, 21, 4, 3, 22, 5];

// Filter #1
let highScores1 = points.filter((n) => {
  return n > 15;
})
console.log(highScores1);

// Filter #2
let highScores2 = points.filter((n) => n > 15)
console.log(highScores2);
