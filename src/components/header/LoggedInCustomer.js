import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LoggedInCustomer extends Component {

    render() {
        const cartImg = <img src="https://img.icons8.com/nolan/34/favorite-cart.png" alt="shopping cart icon" />
        // TODO
        // add cart icon when navbar is being designed
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
                            to="/dashboard"
                            exact
                            className="nav-link"
                        >Profile</NavLink>
                        <NavLink
                            to="/cart"
                            exact
                            className="nav-link"
                        >Cart</NavLink>
                    </div>
                </div>
            </div>
        );
    };
}

export default LoggedInCustomer;