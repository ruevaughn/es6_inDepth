let call = () => {
  let secret = 'ES6 Rocks!';
  // Function closure with a method that reveals the data.
  let reveal = () => {
    console.log(secret);
  }
  reveal();
}

let call2 = () => {
  let secret = 'ES6 Rocks!';
  // Function closure with a method that reveals the data.
  let reveal = () => {
    console.log(secret);
  }
  return reveal;
}

// Lexical scoping - refers to the idea that JavaScript and our program
// keeps track of the location of a variable to understand where it can
// be accessed
export { call, call2 };