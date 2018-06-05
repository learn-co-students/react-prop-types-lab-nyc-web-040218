// Code Product Component Here
import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Product extends Component {
    render() {
        const { name, producer, hasWatermark, color, weight } = this.props
        return (
            <div>
                <h1>{name}</h1>
                <p>{producer}</p>
                <p>{hasWatermark ? "Yes" : "No"}</p>
                <p>{color}</p>
                <p>{weight}</p>
            </div>
        )
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf([
        'white', 'eggshell-white', 'salmon'
    ]).isRequired,
    weight: (props, propName) => {
        const weight = props[propName]
        const isValidWeight = weight > 80 && weight < 300
        if (weight === undefined){
            return new Error('The weight is required')
        } 

        if (isValidWeight){
            return new Error('The `weight` prop should range between 80 and 300.');
        }
    }
}