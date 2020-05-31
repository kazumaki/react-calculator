import operate from './operate';

const operators = ['+', '-', 'X', '÷', '%'];

const calculate = (data, button) => {
  const returnData = { total: data.total, next: data.next, operation: data.operation, display: data.display };

  if (operators.includes(button)) {
    returnData.total = operate(data.total || 0, data.next || 0, button);
    returnData.next = 0;
    returnData.operation = button;
    returnData.display = returnData.total;
  } else if (button === '=') {
    returnData.total = operate(data.total || 0, data.next || 0, data.operation);
    returnData.next = 0;
    returnData.display = returnData.total;
  } else if (button === '+/-') {
    returnData.total *= -1;
    returnData.next *= -1;
    returnData.display = returnData.total;
  } else {
    returnData.next = data.next ? data.next + button : button;
    returnData.display = returnData.next;
  }

  return returnData;
};

export default calculate;
