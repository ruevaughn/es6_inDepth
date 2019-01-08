// Return inner functions

const addSuffix = (x) => {
  const concat = (y) => {
    return y + x;
  }
  return concat;
}

const product = (x) => {
  return y => {
    return y * x;
  }  
}

export { product };
export default addSuffix;