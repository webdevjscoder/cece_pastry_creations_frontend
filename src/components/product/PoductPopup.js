import React, { Component } from 'react';
import './product.css';
import axios from "axios";
import {deleteProduct, editProduct} from "../../actions/productActions";
import { connect } from 'react-redux';
import DeleteProductButton from "./DeleteProductButton";


class ProductPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            id: '',
            name: '',
            price: '',
            image: '',
            description: ''
        };
    }

    componentDidMount() {
        this.getProductDetails();
    }

    getProductDetails() {
        let id = this.props.id
        axios.get(`http://localhost:3001/products/${id}`)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    price: res.data.price,
                    description: res.data.description,
                    image: res.data.image
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
            description: ''
        })
    }

    deleteProduct = (event) => {
        event.preventDefault();
        this.props.deleteProduct(this.state.id);
    }

    // TODO
    // after deleting either re-render /shop or refresh page

    renderEditView = () => {
        const { name, price, description, image} = this.state
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
                <textarea
                    type="text"
                    value={description}
                    name="description"
                    onChange={this.handleChange}
                />
                <br />
                <button onClick={this.changeEditMode}>X</button>
                <button onClick={this.updateProduct}>Submit</button>
            </div>
        </div>
        )
    }

    renderDefaultView = () => {
        const { id, name, price, description, image} = this.state
        return (
            <div className='popup' >
                <div className='popup_inner'>
                    <h1 onDoubleClick={this.changeEditMode}>{name}</h1>
                    <p onDoubleClick={this.changeEditMode}>{description}</p>
                    <button onClick={this.props.closePopup}>close me</button>
                    <DeleteProductButton deleteProduct={this.deleteProduct} />
                </div>
            </div>
        )
    }

    // TODO
    // either render the /shop page or
    // find a way to re-render the popup with new values

    render() {
        return this.state.editMode ?
            this.renderEditView()
            :
            this.renderDefaultView()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editProductInfo: product => dispatch(editProduct(product)),
        deleteProduct: productId => dispatch(deleteProduct(productId))
    }
}

export default connect(null, mapDispatchToProps)(ProductPopup);