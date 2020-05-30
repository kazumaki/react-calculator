import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 700,
};

const operators = ['AC', '+/-', '%', '÷', '+', '-', 'X', '='];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      display: null,
      operation: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    if (operators.includes(buttonName)) {
      const result = calculate(this.state, buttonName);
      this.setState(result);
      this.setState({display: result.total});
    } else {
      const currentNext = this.state.next ? this.state.next += buttonName : buttonName
      this.setState({ next: currentNext, display: currentNext})
    }
  }

  render() {
    return (
      <div id="main-container" style={mainContainerStyle}>
        <Display data={this.state} />
        <ButtonPanel clickHandle={this.handleClick} />
      </div>
    )
  }
};

export default App;
