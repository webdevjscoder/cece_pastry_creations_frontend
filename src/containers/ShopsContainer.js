import React, { Component } from "react";
import ShopsImage from "../components/shop/ShopsImage";
import ShopsForm from "../components/shop/ShopsForm";

class ShopsContainer extends Component {
    render() {
        return (
            <div>
                <h1>Shops Container</h1>
                <ShopsImage />
                <ShopsForm />
            </div>
        )
    }
}

export default ShopsContainer;