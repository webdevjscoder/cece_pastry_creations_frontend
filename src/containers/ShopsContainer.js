import React, { Component } from "react";
import ShopsImage from "../components/shop/ShopsImage";
import { connect } from 'react-redux';
import { fetchProducts } from "../actions/productActions";
import Product from "../components/product/Product";
import ProductPopup from "../components/product/ProductPopup";

class ShopsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            id: ''
        }
    }

    componentDidMount() {
        this.props.renderProducts();
    }

    togglePopup = (id) => {
        this.setState({
            showPopup: !this.state.showPopup,
            id: id
        });
    }

    render() {
        return (
            <div>
                <ShopsImage />
                <Product toggleProduct={this.togglePopup} products={this.props.products}/>
                {this.state.showPopup ?
                <ProductPopup
                    id={this.state.id}
                    closePopup={this.togglePopup}
                    currentUser={this.props.currentUser}
                    cartId={this.props.cartId}
                    history={this.props.history}
                />
                :
                null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        renderProducts: products => dispatch(fetchProducts(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopsContainer);