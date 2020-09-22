import React, { Component } from "react";
import ContactImage from "../components/contact/ContactImage";
import ContactForm from "../components/contact/ContactForm";
import ContactTitle from "../components/contact/ContactTitle";

class ContactContainer extends Component {
    render() {
        return (
            <div>
                <ContactImage />
                <ContactTitle />
                <ContactForm />
            </div>
        )
    }
}

export default ContactContainer;