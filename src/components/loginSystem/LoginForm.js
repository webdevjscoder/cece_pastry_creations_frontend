import React, { Component } from "react";
import axios from 'axios'
import LoginImage from "./LoginImage";
import {Link} from "react-router-dom";

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
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label> <br />
                    <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={email} />
                        <br />
                    <label htmlFor="password">Password</label> <br/>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={password} />
                        <br />
                    <input type="submit" value="Sign In" />
                </form>
                <small>Not Registered?</small>
                <Link to="/sign-up">Sign Up</Link>
            </div>
        );
    }
}

export default LoginForm;