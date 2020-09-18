import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCurrentCartItems, removeCartItem } from "../../actions/cartActions";
import CartProducts from "./CartProducts";

class CustomerCart extends Component {

    componentDidUpdate(prevProps) {
        console.log("rendering")
        if (this.props.cartId !== prevProps.cartId) {
            this.props.renderLineItems(this.props.cartId)
        }
    }

    handleDeleteClick = (productId) => {
        this.props.removeLineItem(productId)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Cart</h1>
                <CartProducts
                    cartItems={this.props.cartItems}
                    handleDeleteClick={this.handleDeleteClick} />
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
        removeLineItem: productId => dispatch(removeCartItem(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerCart);