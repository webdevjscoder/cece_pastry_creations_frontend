import React, { Component } from "react";
import {Button} from 'react-bootstrap';

class AddProductToCartButton extends Component {
    render() {
        return (
            <Button
                style={{backgroundColor: "#9c77a9", borderColor: "#9c77a9"}}
                // className="mx-md-3"
                onClick={this.props.handleAddProduct}>Add to Cart</Button>
        )
    }
}

export default AddProductToCartButton;