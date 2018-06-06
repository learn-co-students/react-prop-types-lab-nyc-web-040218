import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <h3>{this.props.hasWatermark}</h3>
        <h3>{this.props.color}</h3>
        <h3>{this.props.weight}</h3>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, attribute) => {
    // console.log(typeof(props[attribute]));
    if (!(props[attribute] > 80 && props[attribute] < 300)){
      return new Error(
         'Wrong.'
       );
   }
 }
};

export default Product;
