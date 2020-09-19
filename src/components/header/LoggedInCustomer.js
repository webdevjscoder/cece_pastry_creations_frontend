import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

class LoggedInCustomer extends Component {

    render() {
        const cartImg = <img src="https://img.icons8.com/nolan/28/favorite-cart.png"/>
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/">CPC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavLink className="d-inline p-2 bg-dark text-white"
                                     to="/services">Services</NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white"
                                     to="/works">Works</NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white"
                                     to="/shop">Shop</NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white"
                                     to="/Contact">Contact</NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white"
                                     to="/dashboard">Dashboard</NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white"
                                     to="/cart">Cart</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    };
}

export default LoggedInCustomer;