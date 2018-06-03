// Code Product Component Here
import React, {Component} from "react"
import PropTypes from "prop-types"


class Product extends Component{
    render(){
        return(
            <div >
                Product
            </div>

        )
    }
}
Product.defaultProps = {
    hasWatermark: false

}
Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer:PropTypes.string,
    hasWatermark: PropTypes.bool,
    color:PropTypes.oneOf([
        'white',
        'eggshell-white',
        'salmon'
    ]).isRequired,
    weight:(props, propName)=>{
        const weight = props[propName]
        const isValidWeight =weight>80 && weight < 300
        if (weight === undefined) {
          return new Error('The `weight` prop is required.');
        }

        if (isNaN(weight)) {
          return new Error('The `weight` prop is not a number.');
        }
        if (!isValidWeight){
            return new Error `Invalid weight ${weight}`
        }
    }
}

export default Product;
// <h1>Name: {this.props.name}</h1>
// <p>Producer: {this.props.producer}</p>
// <p>WaterMark: {this.props.hasWatermark}</p>
// <p>Color: {this.props.color}</p>
// <p>Weight: {this.props.weight}</p>
//

// Order.defaultProps = {
//     cone: true,
//     size: 'regular'
// }
// Order.protoTypes = {
//     cone: PropTypes.bool,
//     size: PropTypes.string,
//     scoops:PropTypes.arrayOf(PropTypes.string).isRequired,
//     orerInfo: ProtoTypes.object.shape({
//         customerName: PropTypes.string.isRequired,
//         orderedAt: PropTypes.number.isRequired
//     }).isRequired
// }
