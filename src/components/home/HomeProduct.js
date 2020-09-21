import React from "react";

const HomeProduct = () => {
    return (
        <section className="w-100">
            <div className="d-flex">
                <div className="mr-4">
                    <img src="http://placekitten.com/400/500" alt="kitty" />
                </div>
                <div className="d-flex flex-column text-center" style={{margin: "10% 0"}}>
                    <h4 className="mb-3" style={{fontFamily: "Lobster", fontSize: "35px"}}>Item Title Goes Here</h4>
                    <p className="px-lg-5" style={{fontFamily: "Serif"}}>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock.</p>
                    <p className="p-3" style={{fontFamily: "Serif", fontSize: "26px", fontWeight: "bold"}}>$1.50</p>
                    <a className="p-3" href="#" >PLACE AN ORDER NOW!</a>
                </div>
            </div>
        </section>
    )
}

export default HomeProduct;