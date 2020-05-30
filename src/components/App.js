import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 700,
};

const App = () => (
  <div id="main-container" style={mainContainerStyle}>
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
