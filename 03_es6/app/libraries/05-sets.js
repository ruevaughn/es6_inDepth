// Set 1
let set = new Set();
set.add(5);
set.add(43);
set.add("Woohoo");
set.add({x: 50, y: 200});

// Set 2
let numbers = [5, 7, 8, 13, 17];
let set2 = new Set(numbers);

// Set 3
let chars = 'asfdjlekjfalskdfjalwkejfalksdjflakwejfa;lskdfjasefkalhsdfjelak';
let chars_arr = chars.split("");
let charsSet = new Set(chars_arr);
export { set, set2, charsSet };