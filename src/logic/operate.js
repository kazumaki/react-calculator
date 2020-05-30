const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let result;
  if (operation === '+') {
    result = Big(numberOne + numberTwo);
  } else if (operation === '-') {
    result = Big(numberOne - numberTwo);
  } else if (operation === 'X') {
    result = Big(numberOne * numberTwo);
  } else if (operation === '÷') {
    result = Big(numberOne / numberTwo);
  } else {
    result = Big(numberOne * numberTwo / 100);
  }

  return result;
};

export default operate;
