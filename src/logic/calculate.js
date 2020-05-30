import operate from "./operate";

const calculate = (data, button) => {
  if (button === '+/-') {
    data.total = data.total * -1;
    data.next = data.next * - 1;
  } else {
    data.total = operate(data.total, data.next, data.operation);
  }

  return data;
}

export default calculate;