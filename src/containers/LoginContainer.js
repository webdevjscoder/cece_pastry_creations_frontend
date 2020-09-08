import React, { Component } from "react";
import LoginForm from "../components/loginSystem/LoginForm";
import LoginImage from "../components/loginSystem/LoginImage";
import { Link } from "react-router-dom";

class LoginContainer extends Component {
    render() {
        return (
            <div>
                <LoginImage />
                <LoginForm />
                <small>Not Registered?</small>
                <Link to="/sign-up">Sign Up</Link>
            </div>
        );
    };
}

export default LoginContainer;