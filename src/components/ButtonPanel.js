import React from 'react';
import Button from './Button';

const rowStyle = {
  display: 'flex',
  height: 100,
};

const symbols = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const getGroups = () => {
  let buttons = [];
  const groups = [];
  let currentGroup = 0;
  for (let i = 0; i < symbols.length; i += 1) {
    if ((i + 1) % 4 === 0 || symbols[i] === '=') {
      buttons.push(<Button name={symbols[i]} />);
      groups.push(<div id={`group-${currentGroup}`} style={rowStyle}>{buttons}</div>);
      currentGroup += 1;
      buttons = [];
    } else if (symbols[i] === '0') {
      buttons.push(<Button name={symbols[i]} color="light-gray" wide/>);
    } else {
      buttons.push(<Button name={symbols[i]} color="light-gray" />);
    }
  }
  return groups;
}

const ButtonPanel = () => (
  <div id="button-panel">
    {getGroups()}
  </div>
);

export default ButtonPanel;
