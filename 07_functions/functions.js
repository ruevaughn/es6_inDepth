// Function 1
function cheer1() {
  console.log("Woohoo!");
}

cheer1();

// Function 2
var cheer2 = function() {
  console.log("Yipee!");
}

cheer2();

// Function 3
setTimeout(function() {
  console.log("HooWoo.");
}, 3000);


// Arrow Function 1
setTimeout(() => {
  console.log("Hoo Woo!");
}, 3000);


// Arrow Function 2 - with assignment
let cheer3 = () => {
  console.log("Woooooohoo!");
}

cheer3();
