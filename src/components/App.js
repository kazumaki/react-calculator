import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 700,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      dispaly: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(prevState => calculate(prevState, buttonName));
  }

  render() {
    return (
      <div id="main-container" style={mainContainerStyle}>
        <Display data={this.state} />
        <ButtonPanel clickHandle={this.handleClick} />
      </div>
    );
  }
}

export default App;
