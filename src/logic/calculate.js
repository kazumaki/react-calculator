import operate from './operate';

const operators = ['+', '-', 'X', '÷', '%'];
let resultState = 'total';

const totalOperate = (data) => {
  if (data.operation) {
    if (data.operation === '÷') {
      if (data.next == 0) {
        return null;
      } else if (data.next) {
        return operate(data.total || 0, data.next, data.operation);
      } else {
        return null;
      }
    }
    return operate(data.total || 0, data.next || 0, data.operation);
  } else {
    return data.next;
  }
}

const calculate = (data, button) => {
  const returnData = Object.assign({}, data);

  if (operators.includes(button)) {
    returnData.total = totalOperate(returnData);
    returnData.next = 0;
    returnData.operation = button;
    resultState = 'total';
  } else if (button === '=') {
    returnData.total = totalOperate(returnData);
    returnData.next = 0;
    returnData.result = returnData.total;
    resultState = 'total';
  } else if (button === '+/-') {
    returnData.total *= -1;
    returnData.next *= -1;
  } else if (button === 'AC') {
    returnData.total = 0;
    returnData.next = 0;
    resultState = 'total';
  } else if (button === '.') {
    if (returnData.next) {
      if (!returnData.next.includes('.')) {
        returnData.next = returnData.next + button;
      }
    } else {
      returnData.next = '0' + button;
    }
    resultState = 'next';
  } else {
    returnData.next = data.next ? data.next + button : button;
    returnData.result = returnData.next;
    resultState = 'next';
  }
  returnData.result = resultState === 'total' ? returnData.total : returnData.next;
  return returnData;
};

export default calculate;
