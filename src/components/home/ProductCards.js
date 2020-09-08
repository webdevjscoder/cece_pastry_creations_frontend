import React, { Component } from "react";

class ProductCards extends Component {
    render() {
        return (
            <div id="product-card">
                <img src="http://placekitten.com/100/100" alt="kitty cat" />
                <div className="product-card-info">
                    <h3>Title goes here</h3>
                    <p>
                        A brief description will go here
                    </p>
                </div>
            </div>
        )
    }
}

export default ProductCards;