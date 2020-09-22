import React, { Component } from "react";
import LoginForm from "./LoginForm";

class LoginPage extends Component {

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push('/dashboard')
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Status: {this.props.loggedInStatus}</h3>
                <br />
                <LoginForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}

export default LoginPage;