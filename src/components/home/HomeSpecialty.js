import React from "react";

const HomeSpecialty = () => {
    return (
        <section
            style={{background: "url('https://www.thespruceeats.com/thmb/wbP95DvGDlZLDRTaM_4Bc3AT1Wc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/UnicornCupcakesHERO-30b2fd66a8db4a50b90129c402aa25c4.jpg')",
                height: "750px",
                margin: "100px 0"
            }}>
            <div className="d-flex justify-content-end align-items-center" style={{height: "100%", width: "100%"}}>
                <div className="d-flex flex-column text-center mr-5 mr-lg-auto ml-auto mt-auto mb-auto bg-white"
                     style={{width: "500px", height: "422px", padding: "0 60px",
                         borderStyle: "dotted dashed solid double", borderColor: "#9c77a9", borderWidth: "4px"}}>
                    <h2 style={{marginTop: "auto", fontFamily: "Lobster", fontSize: "42px"}}>Specialty Cakes</h2>
                    <p style={{fontFamily: "Serif", marginTop: "10px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock.</p>
                    <a style={{fontFamily: "Serif", marginTop: "20px"}} href="#">PLACE AN ORDER NOW!</a>
                    <img className="mb-auto mr-auto ml-auto mt-3" src="https://img.icons8.com/nolan/64/like.png" alt="heart icon"/>
                </div>
            </div>
        </section>
    )
}

export default HomeSpecialty