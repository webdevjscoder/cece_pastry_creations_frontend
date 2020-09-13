import React, { Component } from "react";
import axios from 'axios';
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

class LoginPage extends Component {

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push('/')
    }

    handleLogout = () => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
            .then(res => {
                this.props.handleLogout()
            })
            .catch(error => {
                console.log("logout error:", error)
            })
    }

    render() {
        return (
            <div>
                <h3>Status: {this.props.loggedInStatus}</h3>
                <button onClick={this.handleLogout}>Logout</button>
                <br />
                <SignUpForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <br />
                <LoginForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}

export default LoginPage;