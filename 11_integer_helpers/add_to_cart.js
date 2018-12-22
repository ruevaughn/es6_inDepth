const addToCart = (item, number) => {
  console.log(Number.isSafeInteger(number))
  return Number.isFinite(number);
}

addToCart('shirt', 5);
addToCart('shirt', Infinity);
addToCart('shirt', Math.pow(2, 54));
