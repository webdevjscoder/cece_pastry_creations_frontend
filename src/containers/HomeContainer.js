import React, { Component } from 'react';
import HomeImage from "../components/home/HomeImage";
import ProductCards from "../components/home/ProductCards";
import '../components/home/home.css'

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <h1>Home Container</h1>
                <HomeImage />
                <div className="product-container">
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                </div>
            </div>
        )
    }
}

export default HomeContainer;