import React, {Component} from "react";
import {editCustomer} from "../../actions/customerActions";
import {connect} from 'react-redux';
import axios from 'axios';

class EditCustomerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                phone_number: '',
                is_admin: false
            }
    }

    componentDidMount() {
        this.getCustomerDetails()
    }

    getCustomerDetails() {
        let id = this.props.match.params.id
        axios.get(`http://localhost:3001/customers/${id}`)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    email: res.data.email,
                    password: res.data.password,
                    phone_number: res.data.phone_number,
                    is_admin: res.data.is_admin
                })
            })
            .catch(error => console.log(error))
    }

    checkBoxValue = () => {
        this.setState({
            is_admin: !this.state.is_admin
        })
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.editCustomerInfo(this.state)
        this.props.history.push('/dashboard')
    }

    render() {
        const {first_name, last_name, email, password, phone_number, is_admin} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="first_name">First Name</label> <br/>
                    <input type="text"
                           name="first_name"
                           onChange={this.handleChange}
                           value={first_name}/>
                    <br/>
                    <label htmlFor="last_name">Last Name</label> <br/>
                    <input type="text"
                           name="last_name"
                           onChange={this.handleChange}
                           value={last_name}/>
                    <br/>
                    <label htmlFor="email">Email</label> <br/>
                    <input type="email"
                           name="email"
                           onChange={this.handleChange}
                           value={email}/>
                    <br/>
                    <label htmlFor="password">Password</label> <br/>
                    <input type="password"
                           name="password"
                           onChange={this.handleChange}
                           value={password}/>
                    <br/>
                    <label htmlFor="phone">Phone #</label> <small>*Optional</small> <br/>
                    <input type="text"
                           name="phone_number"
                           onChange={this.handleChange}
                           value={phone_number}/>
                    <br/>
                    <label htmlFor="is_admin">Admin?</label> <br/>
                    <input type="checkbox"
                           name="is_admin"
                           checked={!!this.state.is_admin}
                           onChange={this.checkBoxValue}
                           value={is_admin}/>
                    <br/>
                    <input type="submit" value="Edit"/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editCustomerInfo: customer => dispatch(editCustomer(customer)),
    }
}


export default connect(null, mapDispatchToProps)(EditCustomerForm);