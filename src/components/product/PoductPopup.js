import React, { Component } from 'react';
import './product.css';
import Product from "./Product";

class ProductPopup extends Component {

    render() {
        console.log("you're making it to the product popup", this.props)
        const product = this.props.products.find(product => product.id === this.props.id)
        console.log(product)
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}

export default ProductPopup;