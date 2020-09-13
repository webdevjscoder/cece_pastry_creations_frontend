import React, { Component } from 'react';
import HomeImage from "../components/home/HomeImage";
import ProductCards from "../components/home/ProductCards";
import '../components/home/home.css'
import ServicesTitle from "../components/service/ServicesTitle";
import VectorImage from "../components/home/VectorImage";

class HomeContainer extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Home Container</h1>
                <h2>Status: {this.props.loggedInStatus}</h2>
                <HomeImage />
                <div className="services-section">
                    <div className="services-title-and-image">
                        <ServicesTitle />
                        <VectorImage />
                    </div>
                    <div className="product-container">
                        <ProductCards />
                        <ProductCards />
                        <ProductCards />
                        <ProductCards />
                        <ProductCards />
                        <ProductCards />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeContainer;