import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    return(
      <div>
        <h3>Name: {this.props.name}</h3>
        <small>Producer: {this.props.producer}</small>
        <small>Watermark: {this.props.hasWatermark}</small>
        <small>Color: {this.props.color}</small>
        <small>Weight: {this.props.weight}</small>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    const range = weight > 80 && weight < 300;

    if (!range) {
      return new Error('Weight must be a number between 80 and 300.');
    }
  }
};

export default Product;
