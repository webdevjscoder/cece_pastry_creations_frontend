import React, { Component } from "react";
import LoginForm from "./LoginForm";

class LoginPage extends Component {

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div>
                <LoginForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}

export default LoginPage;