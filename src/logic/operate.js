const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  if (operation === '+') {
    return Big(numberOne + numberTwo);
  } else if (operation === '-') {
    return Big(numberOne - numberTwo);
  } else if (operation === 'X') {
    return Big(numberOne * numberTwo);
  } else if (operation === '÷') {
    return Big(numberOne / numberTwo);
  } else {
    return Big(numberOne * numberTwo / 100);
  }
}

export default operate;