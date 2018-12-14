document.getElementById('rootnode').innerHTML = "CHANGED";

var check = function(number) {
  if ((number % 2) == 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }
}
check(4);
check(7);
check(10);
