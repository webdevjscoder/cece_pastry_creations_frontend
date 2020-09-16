import React, { Component } from "react";
import axios from 'axios';
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import Logout from "./Logout";

class LoginPage extends Component {

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div>
                <h3>Status: {this.props.loggedInStatus}</h3>
                <br />
                <SignUpForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <br />
                <LoginForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}

export default LoginPage;