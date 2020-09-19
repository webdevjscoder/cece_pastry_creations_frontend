import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/">CPC</Navbar.Brand>
                    <NavLink className="d-inline p-2 bg-dark text-white"
                             to="/services">Services</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white"
                             to="/works">Works</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white"
                             to="/shop">Shop</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white"
                             to="/Contact">Contact</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white"
                             to="/login">Login</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavLink className="d-inline p2 bg-dark text-white"
                                     to="/">Home</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    };
}

export default Header;