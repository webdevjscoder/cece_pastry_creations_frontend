import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Image, Nav, Navbar} from "react-bootstrap";

class Header extends Component {

    render() {
        const linkStyle = {
            color: "#9c77a9",
            fontFamily: 'Lobster',
            fontWeight: "bold",
            fontSize: "18px",
            borderTop: "1px dotted #9c77a9",
            borderBottom: "1px dotted #9c77a9"
        }
        const imgStyle = {
            width: "200px",
            height: "200px"
        }
        return (
            <>
                <Navbar expand="lg" style={{backgroundColor: "#cce4db"}}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex w-100 justify-content-lg-center">
                            <div className="d-flex flex-column flex-lg-row align-items-lg-center">
                                <NavLink className="d-inline px-2 py-4 mx-3"
                                         style={linkStyle}
                                         to="/services">Services</NavLink>
                                <NavLink className="d-inline px-2 py-4 mx-3"
                                         style={linkStyle}
                                         to="/works">Works</NavLink>
                                <NavLink className="d-inline px-2 py-4 mx-3"
                                         style={linkStyle}
                                         to="/shop">Shop</NavLink>
                            </div>
                            <div className="d-lg-inline px-4 d-sm-none mx-3">
                                <NavLink to="/">
                                    <Image src={process.env.PUBLIC_URL + '/logo.jpg'}
                                           roundedCircle
                                           style={imgStyle} /></NavLink>
                            </div>
                            <div className="d-flex flex-column flex-lg-row align-items-lg-center">
                                <NavLink className="d-inline px-2 py-4 text-sm-left mx-3"
                                         style={linkStyle}
                                         to="/Contact">Contact</NavLink>
                                <NavLink className="d-inline px-2 py-4 text-sm-left mx-3"
                                         style={linkStyle}
                                         to="/login">Login</NavLink>
                                <NavLink className="d-inline px-2 py-4 text-sm-left mx-3"
                                         style={linkStyle}
                                         to="/signup">Signup</NavLink>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    };
}

export default Header;