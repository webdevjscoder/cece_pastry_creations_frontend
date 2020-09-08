import React, { Component } from "react";

class ContactForm extends Component {
    render() {
        return (
            <form>
                <label for="name">Name</label> <br />
                <input type="text" name="name" placeholder="Name"/> <br />
                <label for="email">Email</label> <br/>
                <input type="text" name="email" placeholder="Email" /> <br />
                <label for="title">Subject</label> <br/>
                <input type="text" name="title" placeholder="Subject" /> <br />
                <label for="content">Message</label> <br/>
                <textarea name="content" rows="5" cols="33" placeholder="Message" /> <br />
                <input type="submit" value="Send" />
            </form>
        )
    }
}

export default ContactForm;