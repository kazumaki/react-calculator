import operate from './operate';

const calculate = (data, button) => {
  const returnData = data;
  if (button === '+/-') {
    returnData.total *= -1;
    returnData.next *= -1;
  } else {
    returnData.total = operate(data.total, data.next, data.operation);
  }

  return returnData;
};

export default calculate;
