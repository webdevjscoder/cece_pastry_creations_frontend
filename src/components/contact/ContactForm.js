import React, {Component} from "react";
import {Form, Button} from 'react-bootstrap';
import './contact.css';

class ContactForm extends Component {
    render() {
        return (
            <Form className="contact-form">
                <Form.Group controlId="formBasicName">
                    <Form.Control style={{borderWidth: "3px", borderColor: "#f1f1f1", fontFamily: "Serif"}}
                                  type="text" placeholder="Name"/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control style={{borderWidth: "3px", borderColor: "#f1f1f1", fontFamily: "Serif"}}
                                  type="email" placeholder="Email"/>
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                    <Form.Control style={{borderWidth: "3px", borderColor: "#f1f1f1", fontFamily: "Serif"}}
                                  type="text" placeholder="Subject"/>
                </Form.Group>
                <Form.Group className="pb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Control style={{borderWidth: "3px", borderColor: "#f1f1f1", fontFamily: "Serif"}}
                                  as="textarea" rows="6" placeholder="Message"/>
                </Form.Group>
                <Button style={{backgroundColor: "#9c77a9", borderColor: "#9c77a9"}} className="w-100" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default ContactForm;