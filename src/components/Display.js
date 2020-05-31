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
  const { data } = props;
  return <div id="display" style={displayStyle}>{`${data.display || 0}`}</div>;
};

Display.defaultProps = { result: '0' };

Display.propTypes = {
  data: PropTypes.object,
};

export default Display;
