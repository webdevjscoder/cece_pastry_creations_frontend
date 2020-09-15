import React, { Component } from "react";
import ShopsImage from "../components/shop/ShopsImage";
import { connect } from 'react-redux';
import { fetchProducts } from "../actions/productActions";
import Product from "../components/product/Product";
import ProductPopup from "../components/product/PoductPopup";

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
        console.log(this)
        return (
            <div>
                <h1>Shops Container</h1>
                <ShopsImage />
                <Product toggleProduct={this.togglePopup} products={this.props.products}/>
                {this.state.showPopup ?
                <ProductPopup
                    text='Click "Close Button" to hide popup'
                    id={this.state.id}
                    products={this.props.products}
                    closePopup={this.togglePopup} />
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