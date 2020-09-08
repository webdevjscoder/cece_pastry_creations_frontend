import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import "./header.css";

class Header extends Component {
    render() {
        return (
            <div id="header-navbar-container">
                <div className="navbar-links">
                    <div className="links">
                        <NavLink
                            to="/"
                            exact
                            className="nav-link"
                        >Home</NavLink>
                        <NavLink
                            to="/services"
                            exact
                            className="nav-link"
                        >Services</NavLink>
                        <NavLink
                            to="/works"
                            exact
                            className="nav-link"
                        >Works</NavLink>
                        <NavLink
                            to="/shop"
                            exact
                            className="nav-link"
                        >Shop</NavLink>
                        <NavLink
                            to="/contact"
                            exact
                            className="nav-link"
                        >Contact</NavLink>
                        <NavLink
                            to="/sign-in"
                            exact
                            className="nav-link"
                        >Sign-in</NavLink>
                    </div>
                </div>
            </div>
        );
    };
}

export default Header;