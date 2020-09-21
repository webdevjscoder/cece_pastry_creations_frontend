import React, { Component } from 'react';
import WelcomeSection from "../components/home/WelcomeSection";
import HomeProduct from "../components/home/HomeProduct";
import HomeSpecialty from "../components/home/HomeSpecialty";
import HomepageSlideShow from "../components/home/HomepageSlideShow";

class HomeContainer extends Component {

    render() {
        return (
            <div>
                <HomepageSlideShow />
                <div className="w-75 ml-auto mr-auto">
                    <WelcomeSection />
                    <HomeProduct />
                </div>
                    <HomeSpecialty />
            </div>
        )
    }
}

export default HomeContainer;

// const backgroundImg = "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/131e1aaa7edc4df4b6fc077627688833/yt.jpg?output-format=auto&output-quality=auto"
// const renderBackgroundImg = {
//     backgroundImage: `url(${backgroundImg})`,
//     width: "100%"
// }