import React, { Component } from "react";
import ShopsImage from "../components/shop/ShopsImage";
import { connect } from 'react-redux';
import { fetchProducts } from "../actions/productActions";
import Product from "../components/product/Product";

class ShopsContainer extends Component {

    componentDidMount() {
        this.props.renderProducts();
    }

    render() {
        return (
            <div>
                <h1>Shops Container</h1>
                <ShopsImage />
                <Product products={this.props.products}/>
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