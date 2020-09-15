import React, {Component} from "react";
import { createProduct } from "../../actions/productActions";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            image: '',
            description: ''
        }
    }

    handleOnChange = (event) => {
        const { name, value } = event.target
        console.log(name, value)
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewProduct(this.state);
        this.setState({
            name: '',
            price: '',
            image: '',
            description: ''
        })
    }

    render() {
        const { successfulCreation } = this.props.products
        if (successfulCreation) {
            return <Redirect to='/shop' />
        } else {
            return (
                <div>
                    <h1>Add Product</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleOnChange}
                            value={this.state.name}
                        />
                        <br />
                        <label htmlFor="price">Price</label>
                        <br />
                        <input
                            type="number"
                            name="price"
                            onChange={this.handleOnChange}
                            value={this.state.price}
                        />
                        <br />
                        <label htmlFor="description">Description</label>
                        <br />
                        <textarea
                            rows="5"
                            cols="33"
                            placeholder="Message"
                            name="description"
                            onChange={this.handleOnChange}
                            value={this.state.description}
                        />
                        <br />
                        <label htmlFor="image">Image</label>
                        <br />
                        <input
                            type="text"
                            name="image"
                            onChange={this.handleOnChange}
                            value={this.state.image}
                        />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
        }
        }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewProduct: product => dispatch(createProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);