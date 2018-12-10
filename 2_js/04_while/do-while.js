document.getElementById('root-while').innerHTML = "While Loops - Now Featuring Do While";

var names = ["Frodo", "Sam", "Merry", "Pippin"];

// do-while loops execute before condition is checked, as opposed
// to while loops which check the condition first.

var i = 0;
do {
  console.log(names[i]);
  i++;
} while(i < names.length);

