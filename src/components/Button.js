import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, wide, color, handleClick } = props;
  const buttonSize = wide === true ? '50%' : '25%';
  const buttonStyle = {
    fontWeight: 'bold',
    width: buttonSize,
    backgroundColor: color,
    border: 'solid 1px #C0C0C0',
  };
  return (
    <button type="button" onClick={handleClick} style={buttonStyle}>{name}</button>
  );
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: false,
  handleClick: () => {},
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
