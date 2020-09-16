import React from "react";

const Product = props => {
    const productItems = props.products.map(product => (
        <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => props.toggleProduct(product.id)}>View Product</button>
        </div>
    ));

    return (
        <>
            {productItems}
        </>
    )
}

export default Product;