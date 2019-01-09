const arrayIterator = (array) => {
  let index = 0;

  return {
    next: () => {
      if (index < array.length) {
        let next = array[index];
        index += 1;
        return next;
      }
    }
  }
}

export default arrayIterator;

function* es6ArrayIterator() {
  yield* arguments;
  // same as yield* arguments
  // for (let arg of arguments) {
  //   yield arg;
  // }
}

export { es6ArrayIterator };