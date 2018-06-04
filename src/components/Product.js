import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render(){
    return(
      <div>
      <h3>{this.props.name}</h3>
      <h4>{this.props.producer}</h4>
      <h4>{this.props.hasWatermark}</h4>
      <h4>{this.props.color}</h4>
      <h4>{this.props.weight}</h4>
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
  hasWatermark: PropTypes.bool.isRequired,
  color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: (props, propName) => {
  const weight = props["weight"];
    if (weight === undefined){
      return new Error('The `weight` prop is required.')
    }

    if (isNaN(weight)) {
        return new Error('The `weight` prop is not a number.');
    }

    const validWeight = weight > 80 && weight < 300

    if (!validWeight){
      return new Error ('The `weight` prop should be between 80 and 300.')
    }
  },
}

export default Product;
