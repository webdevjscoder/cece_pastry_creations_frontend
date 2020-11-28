import React from "react";
import { Card, Button } from 'react-bootstrap';
import Product from "./Product";

class ProductCard extends React.Component {

    render() {
        const defaultImg = "http://placekitten.com/478/478"
        const productItems = this.props.products.sort((a, b) => {
            return b.count - a.count
        }).map(product => (
                <Product name={product.name}
                         image={product.image}
                         defaultImg={defaultImg}
                         description={product.description}
                         id={product.id}
                         togglePopup={this.props.toggleProduct}
                         count={product.count}
                         key={product.id}
                />
            ));
        return (
            <div
                className="d-flex flex-md-column flex-lg-row flex-lg-wrap align-items-md-center justify-content-lg-center my-5"
            >
                {productItems}
            </div>
        )
    }
}

export default ProductCard;