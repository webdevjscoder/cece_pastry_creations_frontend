import React, { Component } from 'react';
import HomeImage from "../components/home/HomeImage";
import WelcomeSection from "../components/home/WelcomeSection";
import HomeProduct from "../components/home/HomeProduct";
import HomeSpecialty from "../components/home/HomeSpecialty";

class HomeContainer extends Component {

    render() {
        return (
            <div>
                <h2>Status: {this.props.loggedInStatus}</h2>
                <HomeImage />
                <WelcomeSection />
                <HomeProduct />
                <HomeSpecialty />
            </div>
        )
    }
}

export default HomeContainer;