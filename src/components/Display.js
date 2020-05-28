import React from 'react';
import PropTypes from 'prop-types';

const displayStyle = {
  webkitBoxSizing: 'border-box',
  mozBoxSizing: 'border-box',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: 'gray',
  height: 100,
  color: 'white',
  fontWeight: 'bold',
  padding: 10,
};

const Display = props => {
  const { result } = props;
  return <div id="display" style={displayStyle}>{result}</div>;
};

Display.defaultProps = { result: '0' };

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
