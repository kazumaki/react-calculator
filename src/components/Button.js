import React from 'react';
import PropTypes from 'prop-types';



const Button = props => {
  const { name, wide, color } = props;
  const width = wide === true ? '50%' : '25%';
  const buttonStyle = {
    fontWeight: 'bold',
    width: width,
    backgroundColor: color,
    border: 'solid 1px #C0C0C0'
  }
  return (
    <button type="button" style={buttonStyle}>{name}</button>
  );
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
