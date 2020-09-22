import React, { Component } from "react";
import axios from 'axios'
import LoginImage from "./LoginImage";
import {Link} from "react-router-dom";
import LoginTitle from "./LoginTitle";
import {Button, Form} from "react-bootstrap";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state
        let customer = {
            email: email,
            password: password
        }
        axios.post('http://localhost:3001/sessions', {customer}, {withCredentials: true})
            .then(res => {
                if (res.data.logged_in === true) {
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
        const { email, password } = this.state
        return (
            <div>
                <LoginImage />
                <LoginTitle />
                <Form className="contact-form" onSubmit={this.handleSubmit}>
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
                    <Button style={{backgroundColor: "#9c77a9", borderColor: "#9c77a9"}} className="w-100" type="submit">
                        Submit
                    </Button>
                    <div className="text-center p-5 w-100" style={{fontFamily: "Serif"}}>
                        <small className="px-2" style={{fontSize: "16px"}}>Not Registered?</small>
                        <Link style={{fontSize: "18px", color: "#9c77a9"}} to="/signup">Sign Up</Link>
                    </div>
                </Form>
            </div>
        );
    }
}

export default LoginForm;