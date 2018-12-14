// concept: Block scoping

// #1 Block Scoping with let
let limit = 200;

{
  let limit = 10;
  console.log('backstage limit', limit);
  // overall venue limit 10
}

console.log('overall venue limit', limit);
// overall venue limit 200



// #2 Block Scoping with var
// var does not recognize block scoping, it changes the globally scoped limit
var limit = 200;

{
  var limit = 10;
  console.log('backstage limit', limit);
  // overall venue limit 10
}

console.log('overall venue limit', limit);
// overall venue limit 10




// #3 Block Scoping with const
// const cannot be re-assigned or re-declared
const limit = 200;

{
  const limit = 10;
  console.log('backstage limit', limit);
  // overall venue limit 10
}

console.log('overall venue limit', limit);
// overall venue limit 200



// #4 function block scoping
function hello() {
  let message = "Hello";
  console.log(message);
}

function greeting() {
  let message = "How are you?";
  console.log(message);
}

hello();
greeting();
