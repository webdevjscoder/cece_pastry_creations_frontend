import React, { Component } from "react";

class ContactForm extends Component {
    render() {
        return (
            <form>
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="title" placeholder="Subject" />
                <textarea name="content" rows="5" cols="33" placeholder="Message" />
                <input type="submit" value="Send" />
            </form>
        )
    }
}

export default ContactForm;