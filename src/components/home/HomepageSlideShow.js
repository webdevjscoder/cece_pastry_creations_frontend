import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';

class HomepageSlideShow extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/del.h-cdn.co/assets/18/07/1518475314-vanilla-cupcake-horizontal-.jpg?crop=0.648xw:0.972xh;0.231xw,0.0179xh&resize=980:*"
                        height="750px"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.bostongirlbakes.com/wp-content/uploads/2019/02/IMG_0290-2-1024x702.jpg"
                        height="750px"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.biggerbolderbaking.com/wp-content/uploads/2018/11/Cupcakefinal1-1024x683.jpg"
                        height="750px"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default HomepageSlideShow;