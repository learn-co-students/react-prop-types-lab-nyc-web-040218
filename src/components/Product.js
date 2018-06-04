// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>name: {this.props.name}</p>
        <p>producer: {this.props.producer}</p>
        <p>hasWatermark: {this.props.hasWatermark}</p>
        <p>color: {this.props.color}</p>
        <p>weight: {this.props.weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    if (props[propName] === undefined) {
      return new Error('is required');
    }

    if (isNaN(props[propName])) {
      return new Error('has to be a number');
    }

    if (props[propName] < 80 || props[propName] > 300) {
      return new Error('has to be within range');
    }
  }
};
