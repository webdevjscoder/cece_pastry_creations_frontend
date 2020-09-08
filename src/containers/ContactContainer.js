import React, { Component } from "react";
import ContactImage from "../components/contact/Contact";
import ContactForm from "../components/contact/ContactFrom";

class ContactContainer extends Component {
    render() {
        return (
            <div>
                <h1>Contact Container</h1>
                <ContactImage />
                <ContactForm />
            </div>
        )
    }
}

export default ContactContainer;