import React, { Component } from "react";
import axios from 'axios'

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone_number: '',
            is_admin: false,
            errors: ''
        }
    }

    checkBoxValue = () => {
        this.setState({
            is_admin: !this.state.is_admin
        })
    }


    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {first_name, last_name, email, password, phone_number, is_admin} = this.state
        let customer = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                phone_number: phone_number,
                is_admin: is_admin
        }
        axios.post('http://localhost:3001/customers', {customer}, {withCredentials: true})
            .then(res => {
                if (res.data.status === 'created') {
                    this.props.handleSuccessfulAuth(res.data)
                } else {
                    this.setState({
                        errors: res.data.errors
                    })
                }
            })
            .catch(error => console.log('api errors:', error))
    };

    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.errors.map(error => {
                        return <li key={error}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        const {first_name, last_name, email, password, phone_number, is_admin} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="first_name">First Name</label> <br />
                    <input type="text"
                           name="first_name"
                           onChange={this.handleChange}
                           value={first_name} />
                           <br />
                    <label htmlFor="last_name">Last Name</label> <br/>
                    <input type="text"
                           name="last_name"
                           onChange={this.handleChange}
                           value={last_name} />
                           <br />
                    <label htmlFor="email">Email</label> <br/>
                    <input type="email"
                           name="email"
                           onChange={this.handleChange}
                           value={email} />
                           <br />
                    <label htmlFor="password">Password</label> <br/>
                    <input type="password"
                           name="password"
                           onChange={this.handleChange}
                           value={password} />
                           <br />
                    <label htmlFor="phone">Phone #</label> <small>*Optional</small> <br/>
                    <input type="text"
                           name="phone_number"
                           onChange={this.handleChange}
                           value={phone_number} />
                           <br />
                    <label htmlFor="is_admin">Admin?</label> <br/>
                    <input type="checkbox"
                           name="is_admin"
                           onChange={this.checkBoxValue}
                           value={is_admin} />
                           <br />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default SignUpForm;