import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <p>Hi</p>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

const weightProp = function(props, propName, componentName) {
  if (typeof(props[propName]) != 'number') {
    debugger
    return new Error(
      'Weight must be a number.'
    )
  } else if (props[propName] > 300 || props[propName] < 80) {
      return new Error(
        'Weight must be between 80 and 300.'
      )
  } else {
    return null
  }
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell',
    'salmon'
  ]).isRequired,
  weight: weightProp
}
