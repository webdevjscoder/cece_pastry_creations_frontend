import React, { Component } from "react";

class AddProductToCartButton extends Component {
    render() {
        return (
            <button onClick={this.props.handleAddProduct}>Add to Cart</button>
        )
    }
}

export default AddProductToCartButton;