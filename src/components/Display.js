import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  render() {
    const { result } = this.props;
    return result;
  }
}

Display.defaultProps = { result: '0' };

Display.propTypes = {
  result: PropTypes.string,
};
