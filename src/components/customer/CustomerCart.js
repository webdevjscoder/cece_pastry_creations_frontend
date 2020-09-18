import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCurrentCartItems, removeCartItem, clearCart } from "../../actions/cartActions";
import CartProducts from "./CartProducts";
import ClearCartButton from "./ClearCartButton";

class CustomerCart extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.cartId !== prevProps.cartId) {
            this.props.renderLineItems(this.props.cartId)
        }
    }

    handleDeleteClick = (productId) => {
        this.props.removeLineItem(productId)
    }

    handleClearCart = () => {
        this.props.clearCartItems(this.props.cartId)
    }

    render() {
        return (
            <div>
                <h1>Cart</h1>
                <CartProducts
                    cartItems={this.props.cartItems}
                    handleDeleteClick={this.handleDeleteClick} />
                    <ClearCartButton clearCart={this.handleClearCart} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.carts.cartLineItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        renderLineItems: cartId => dispatch(fetchCurrentCartItems(cartId)),
        removeLineItem: productId => dispatch(removeCartItem(productId)),
        clearCartItems: cartId => dispatch(clearCart(cartId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerCart);