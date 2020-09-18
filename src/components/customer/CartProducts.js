import React from 'react';

const CartProducts = props => {
    const renderCartItems = props.cartItems.map(item => {
        const formattedPrice = Number.parseFloat(item.price).toFixed(2);
        const defaultImg = "http://placekitten.com/200/200"
        return (
            <ul key={item.id}>
                <li>{item.name}</li>
                <li>{item.image !== "" ? <img src={item.image} alt={item.name} width="200px" height="200px"/>
                    : <img src={defaultImg} alt="default"/> }</li>
                <li>{item.description}</li>
                <li>$ {formattedPrice}</li>
                <li>Rating: {item.rating === null ? 0 : item.rating}</li>
                <button onClick={() => props.handleDeleteClick(item.id)}>Remove</button>
            </ul>
        )
    })
    return (
        <div>
            {renderCartItems}
        </div>
    )
}

export default CartProducts;