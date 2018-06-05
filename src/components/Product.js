// Code Product Component Here
import React, { Component } from "react";
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <li>Producer: {this.props.producer}</li>
        <li>Watermark: {this.props.hasWatermark}</li>
        <li>Color: {this.props.color}</li>
        <li>Weight: {this.props.weight}</li>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(
    ['white',
    'eggshell-white',
    'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    const range = weight > 80 && weight < 300;

    if (weight === undefined){
      return new Error('has to be a number');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }
    
    if (!range) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
}

export default Product;
