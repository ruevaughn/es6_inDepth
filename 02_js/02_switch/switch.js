document.getElementById('rootnode').innerHTML = "SWITCH STATEMENTS";

var x = 4;

// cases are like a period at the end of a sentence
switch(x) {
  case 1:
    console.log("The number is one");
    break;
  case 2:
    console.log("The number is two");
    break;
  case 3:
    console.log("The number is three");
    break;
  default:
    console.log(`The number is ${x}`);
}
