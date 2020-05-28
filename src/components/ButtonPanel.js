import React from 'react';
import Button from './Button';

const rowStyle = {
  display: 'flex',
  height: 100,
};

const ButtonPanel = () => (
  <div id="button-panel">
    <div id="group-1" style={rowStyle}>
      <Button name="AC" color="light-gray" />
      <Button name="+/-" color="light-gray" />
      <Button name="%" color="light-gray" />
      <Button name="÷" />
    </div>
    <div id="group-2" style={rowStyle}>
      <Button name="7" color="light-gray" />
      <Button name="8" color="light-gray" />
      <Button name="9" color="light-gray" />
      <Button name="X" />
    </div>
    <div id="group-3" style={rowStyle}>
      <Button name="4" color="light-gray" />
      <Button name="5" color="light-gray" />
      <Button name="6" color="light-gray" />
      <Button name="-" />
    </div>
    <div id="group-3" style={rowStyle}>
      <Button name="4" color="light-gray" />
      <Button name="5" color="light-gray" />
      <Button name="6" color="light-gray" />
      <Button name="-" />
    </div>
    <div id="group-4" style={rowStyle}>
      <Button name="1" color="light-gray" />
      <Button name="2" color="light-gray" />
      <Button name="3" color="light-gray" />
      <Button name="+" />
    </div>
    <div id="group-5" style={rowStyle}>
      <Button name="0" color="light-gray" wide />
      <Button name="." color="light-gray" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
