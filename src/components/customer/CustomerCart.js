import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCurrentCartItems } from "../../actions/cartActions";

class CustomerCart extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.cartId !== prevProps.cartId) {
            this.props.renderLineItems(this.props.cartId)
        }
    }

    renderCartItems = () => {
        return this.props.cartItems.map(item => {
            return (
                <ul key={item.id}>
                    <li>{item.name}</li>
                    <li>{item.image}</li>
                    <li>{item.description}</li>
                    <li>{item.price}</li>
                    <li>{item.rating === null ? 0 : item.rating}</li>
                </ul>
            )
        })

    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Cart</h1>
                {this.renderCartItems()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.carts.lineItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        renderLineItems: cartId => dispatch(fetchCurrentCartItems(cartId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerCart);