import React, { Component } from 'react';
import './product.css';
import axios from "axios";
import {deleteProduct, editProduct} from "../../actions/productActions";
import { connect } from 'react-redux';
import DeleteProductButton from "./DeleteProductButton";
import AddProductToCartButton from "./AddProductToCartButton";
import { addToCart } from "../../actions/cartActions";
import {Button} from 'react-bootstrap';

class ProductPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            id: '',
            name: '',
            price: '',
            image: '',
            description: '',
            rating: ''
        };
    }

    componentDidMount() {
        this.getProductDetails();
    }

    getProductDetails() {
        let id = this.props.id
        console.log(id)
        axios.get(`http://localhost:3001/products/${id}`)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    price: res.data.price,
                    description: res.data.description,
                    image: res.data.image,
                    rating: res.data.rating
                }, () => console.log(this.state))
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    changeEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    updateProduct = (event) => {
        event.preventDefault();
        this.props.editProductInfo(this.state);
        this.setState({
            editMode: false,
            id: '',
            name: '',
            price: '',
            image: '',
            description: '',
            rating: ''
        })
    }

    deleteProduct = (event) => {
        event.preventDefault();
        this.props.deleteProduct(this.state.id);
    }

    // TODO
    // after deleting either re-render /shop or refresh page
    // admin functionality

    renderEditView = () => {
        const { name, price, description, image, rating} = this.state
        const formattedPrice = Number.parseFloat(price).toFixed(2);
        return (
        <div className='popup'>
            <div className='popup_inner' >
                <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    value={image}
                    name="image"
                    onChange={this.handleChange}
                />
                <br />
                <textarea
                    type="text"
                    value={description}
                    name="description"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="number"
                    value={formattedPrice}
                    name="price"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="number"
                    value={rating}
                    name="rating"
                    onChange={this.handleChange}
                />
                <br />
                <button onClick={this.changeEditMode}>X</button>
                <button onClick={this.updateProduct}>Submit</button>
            </div>
        </div>
        )
    }

    handleAddProduct = () => {
        this.props.addToCart(this.state.id, this.props.currentUser.id)
    }

    renderDefaultView = () => {
        this.redirect();
        const { name, price, description, image, rating} = this.state
        const formattedPrice = Number.parseFloat(price).toFixed(2);
        const neutralRating = rating === null ? 0 : rating
        return (
            <div className='popup' >
                <div className='popup_inner px-md-5 pb-md-5'>
                    <h1
                        style={{fontFamily: "Lobster"}}
                        className="text-center p-5"
                        onDoubleClick={this.changeEditMode}>{name}</h1>
                    <div className="d-flex flex-md-column flex-lg-row flex-lg-wrap align-items-md-center justify-content-lg-center"
                         style={{fontFamily: "Serif"}}>
                        <div>
                            <img src={image} alt={name} />
                        </div>
                        <div className="m-5">
                            <p onDoubleClick={this.changeEditMode}>{description}</p>
                            <span className="mb-4">Price: ${formattedPrice}</span>
                            <br />
                            <span className="mb-4">Rating: {neutralRating}</span>
                        </div>
                        <div className="d-flex w-100 justify-content-md-around justify-content-lg-around my-lg-5">
                            <Button
                                // className="mx-md-3"
                                style={{backgroundColor: "#9c77a9", borderColor: "#9c77a9"}}
                                onClick={this.props.closePopup}>close me</Button>
                            {this.props.currentUser.is_admin === true ?
                                <>
                                    <DeleteProductButton
                                        deleteProduct={this.deleteProduct} />
                                    <AddProductToCartButton
                                        handleAddProduct={this.handleAddProduct} />
                                </>
                                :
                                <AddProductToCartButton
                                    handleAddProduct={this.handleAddProduct} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    redirect() {
        if (this.props.addedProduct === true) {
            this.props.history.push('/cart');
        }
    }

    // TODO
    // either render the /shop page or
    // find a way to re-render the popup with new values
    // admin functionality

    render() {
        console.log(this.props)
        return this.state.editMode && this.props.currentUser.is_admin === true ?
            this.renderEditView()
            :
            this.renderDefaultView()
    }
}

const mapStateToProps = state => {
    return {
        addedProduct: state.carts.addedProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editProductInfo: product => dispatch(editProduct(product)),
        deleteProduct: productId => dispatch(deleteProduct(productId)),
        addToCart: (productId, currentUserId) => dispatch(addToCart(productId, currentUserId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPopup);