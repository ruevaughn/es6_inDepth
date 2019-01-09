// Syntax for a generator uses a function keyword followed by an asterisk
// A generator introduces controlled flow into the functions runtime, rather
// than following the run to completion model we can create functions with pause
// and resume capability

// a function which pauses, and returns its current value when paused
export default function* letterMaker() {
  yield 'a';
  yield 'b';
  yield 'c';
}

function* countMaker() {
  let count = 0;
  while(count < 3){
    yield count += 1;
  }
}

// Generators 2 - More involved Generators - controlled flow
function* evens() {
  let count = 0;
  while(true) {
    count += 2;
    let reset = yield count;
    if (reset) {
      count = 0;
    }
  }
}


export { countMaker, evens };


