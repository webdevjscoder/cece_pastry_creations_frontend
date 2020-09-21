import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav, Image} from 'react-bootstrap';

class LoggedInCustomer extends Component {

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
        const { first_name, last_name } = this.props.currentUser
        const cartImg = <img src="https://img.icons8.com/nolan/24/favorite-cart.png"/>
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
                                <NavLink className="d-inline px-2 py-4 mx-3"
                                         style={linkStyle}
                                         to="/Contact">Contact</NavLink>
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
                                         to="/dashboard">Dashboard</NavLink>
                                <NavLink className="d-inline px-2 py-4 text-sm-left mx-3"
                                         style={linkStyle}
                                         to="/cart">{cartImg}</NavLink>
                                <Navbar.Text className="d-inline px-2 py-4 text-sm-left mx-3"
                                             style={linkStyle}>
                                    Signed in as: <span>{first_name} {last_name}</span>
                                </Navbar.Text>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    };
}

export default LoggedInCustomer;