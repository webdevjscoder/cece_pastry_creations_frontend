import React from "react";
import VectorImage from "./VectorImage";

const WelcomeSection = () => {
    return (
        <section className="d-flex flex-column">
            <div className="d-flex align-self-center flex-column p-5 mt-5">
                <h1 className="text-center" style={{fontFamily: 'Lobster', fontSize: "50px"}}>Welcome</h1>
                <VectorImage />
            </div>
            <div className="d-flex flex-row">
                <div className="w-50 mx-3 mb-5 px-3" style={{fontSize: "18px", fontFamily: "Serif"}}>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections 1.10.32
                        and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                        are also reproduced in their exact original form, accompanied
                        by English versions from the 1914 translation by H. Rackham.</p>
                </div>
                <div className="w-50">
                    <div className="d-flex flex-row mb-4" style={{fontSize: "18px", fontFamily: "Serif"}}>
                        <div>
                            <img src="https://img.icons8.com/nolan/24/worldwide-location.png" alt="location icon" />
                        </div>
                        <div className="ml-2">
                            <a href="#" >USA, Los Angeles, 555 Some Street, SomeCity, CA 55555</a>
                        </div>
                    </div>
                    <div className="d-flex flex-row" style={{fontSize: "18px", fontFamily: "Serif"}}>
                        <div>
                            <img src="https://img.icons8.com/nolan/24/phone.png" alt="phone icon"/>
                        </div>
                        <div className="ml-2">
                            <a href="#" >(555) 555 5555</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection;