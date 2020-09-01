import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const linkStyling = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}

class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink
                    to="/"
                    exact
                    style={linkStyling}
                >Logo</NavLink>
                <NavLink
                    to="/about"
                    exact
                    style={linkStyling}
                    >About</NavLink>
                <NavLink
                    to="/contact"
                    exact
                    style={linkStyling}
                    >Contact</NavLink>
            </div>
        );
    };
}

export default Navbar;