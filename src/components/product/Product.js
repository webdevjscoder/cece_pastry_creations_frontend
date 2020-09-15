import React from "react";

const Product = props => {
    const productItems = props.products.map(product => (
        <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
        </div>
    ));

    return (
        <>
            {productItems}
        </>
    )
}

export default Product;