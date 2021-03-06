const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const bigOne = new Big(numberOne);
  const bigTwo = new Big(numberTwo);

  if (operation === '+') {
    result = bigOne.plus(bigTwo);
  } else if (operation === '-') {
    result = bigOne.minus(bigTwo);
  } else if (operation === 'X') {
    result = bigOne.times(bigTwo);
  } else if (operation === '÷') {
    result = numberTwo === '0' || numberTwo === 0 ? bigOne : bigOne.div(bigTwo);
  } else if (operation === '%') {
    result = bigOne.plus(bigOne.times(bigTwo.div(100)));
  }

  return result.toFixed();
};

export default operate;
