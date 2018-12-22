// 1 Push array method
const emails = ['frodo@email.com', 'samwise@email.com', 'merry@email.com']
emails.push('pippin@email.com');
console.log(emails)


const addToCart = (item, number) => {
  console.log(Number.isSafeInteger(number))
  return Number.isFinite(number);
}

addToCart('shirt', 5);
addToCart('shirt', Infinity);
addToCart('shirt', Math.pow(2, 54));
