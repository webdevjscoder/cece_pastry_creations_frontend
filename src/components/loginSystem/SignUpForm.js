import React, { Component } from "react";
import axios from 'axios';
import SignupTitle from "./SignupTitle";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

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
                    this.handleSuccessfulAuth(res.data)
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

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push('/dashboard')
    }

    render() {
        console.log(this.props, this)
        const {first_name, last_name, email, password, phone_number, is_admin} = this.state
        return (
            <div>
                <SignupTitle />
                <Form className="contact-form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Control style={{borderWidth: "3px", borderColor: "#f1f1f1", fontFamily: "Serif"}}
                                      name="first_name"
                                      onChange={this.handleChange}
                                      value={first_name}
                                      type="text"
                                      placeholder="First Name"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Control style={{borderWidth: "3px", borderColor: "#f1f1f1", fontFamily: "Serif"}}
                                      name="last_name"
                                      onChange={this.handleChange}
                                      value={last_name}
                                      type="text"
                                      placeholder="Last Name"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control style={{borderWidth: "3px", borderColor: "#f1f1f1", fontFamily: "Serif"}}
                                      name="email"
                                      onChange={this.handleChange}
                                      value={email}
                                      type="email"
                                      placeholder="Email"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control style={{borderWidth: "3px", borderColor: "#f1f1f1", fontFamily: "Serif"}}
                                      name="password"
                                      onChange={this.handleChange}
                                      value={password}
                                      type="password"
                                      placeholder="Password"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Control style={{borderWidth: "3px", borderColor: "#f1f1f1", fontFamily: "Serif"}}
                                      name="phone_number"
                                      onChange={this.handleChange}
                                      value={phone_number}
                                      type="phone"
                                      placeholder="Phone (Optional)"/>
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox"
                                    label="Admin?"
                                    name="is_admin"
                                    onChange={this.checkBoxValue}
                                    value={is_admin}/>
                    </Form.Group>
                    <Button style={{backgroundColor: "#9c77a9", borderColor: "#9c77a9"}} className="w-100" type="submit">
                        Submit
                    </Button>
                    <div className="text-center p-5 w-100" style={{fontFamily: "Serif"}}>
                        <small className="px-2" style={{fontSize: "16px"}}>Already have an account?</small>
                        <Link style={{fontSize: "18px", color: "#9c77a9"}} to="/login">Log In</Link>
                    </div>
                </Form>
            </div>
        )
    }
}

export default SignUpForm;
