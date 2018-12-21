// 1
const emails = ['frodo@email.com', 'samwise@email.com', 'merry@email.com']
emails.push('pippin@email.com');
console.log(emails)

//

const addToCart = (item, number) => {
  return Number.isFinite(number);
}

console.log(addToCart('shirt', Infinity));
console.log(addToCart('shirt', 1));
// console.log(addToCart('shirt', Infinity));

