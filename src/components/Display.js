import React from 'react';
import PropTypes from 'prop-types';

const displayStyle = {
  webkitBoxSizing: 'border-box',
  mozBoxSizing: 'border-box',    /* Firefox, other Gecko */
  boxSizing: 'border-box',        /* Opera/IE 8+ */
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: 'gray',
  height: 100,
  color: 'white',
  fontWeight: 'bold',
  padding: 10,
}

export default class Display extends React.Component {
  render() {
    const { result } = this.props;
    return <div id="display" style={displayStyle}>{result}</div>;
  }
}

Display.defaultProps = { result: '0' };

Display.propTypes = {
  result: PropTypes.string,
};
