import React from 'react';
import PropTypes from 'prop-types'

export class Display extends React.Component {
  render() {
    return this.props.result;
  }
}

Display.defaultProps = { result: '0' }

Display.propTypes = {
  result: PropTypes.string,
}