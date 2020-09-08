import React, { Component } from "react";

class ShopsForm extends Component {
    render() {
        return (
            <form>
                <input type="text" name="name" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default ShopsForm;