import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <button>{name}</button>
    );
  }
}

Button.defaultProps = {
  name: '',
}

Button.propTypes = {
  name: PropTypes.string,
}
