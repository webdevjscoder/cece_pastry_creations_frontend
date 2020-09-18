import React, { Component } from 'react';
import HomeImage from "../components/home/HomeImage";
import ServicesTitle from "../components/service/ServicesTitle";
import VectorImage from "../components/home/VectorImage";

class HomeContainer extends Component {

    render() {
        return (
            <div>
                <h2>Status: {this.props.loggedInStatus}</h2>
                <HomeImage />
            </div>
        )
    }
}

export default HomeContainer;