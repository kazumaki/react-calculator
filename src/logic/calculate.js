import operate from './operate';

const calculate = (data, button) => {
  const returnData = { total: null, next: null, operation: button };
  let next = data.next;
  if (button === '%') {
    next = Number(data.total) * (Number(data.next) / 100);
    returnData.operation = data.operation;
  } else if (button === '+/-') {
    returnData.total = data.total * -1;
    returnData.next = data.next * -1;
    returnData.operation = data.operation;
    return returnData;
  } else if (button === '=') {
    returnData.operation = data.operation;
  }
  if (data.next && data.total) {
    returnData.total = operate(data.total, next, data.operation);
    returnData.next = null;
  } else if (data.next) {
    returnData.total = data.next;
  } else if (data.total) {
    returnData.total = data.total;
  }

  return returnData;
};

export default calculate;
