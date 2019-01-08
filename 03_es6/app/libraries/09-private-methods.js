// We an emulate the behavior of private classes using closures
const budget = () => {
  let balance = 0;
  // emulated private method
  let changeBal = (val) => {
    return balance += val;
  }
  // closure allowing us to accessing emulated 'private / internal' data
  const deposit20 = () => changeBal(20);
  const withdraw20 = () => changeBal(-20);
  const checkBal = () => balance;

  return {
    deposit20,
    withdraw20,
    checkBal
  }
}

export default budget;