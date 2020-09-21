import React from "react";

const HomeSpecialty = () => {
    return (
        <section
            style={{background: "url('https://www.thespruceeats.com/thmb/wbP95DvGDlZLDRTaM_4Bc3AT1Wc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/UnicornCupcakesHERO-30b2fd66a8db4a50b90129c402aa25c4.jpg')",
                height: "500px",
                margin: "100px 0"
            }}>
            <div
                style={{border: "1px solid red", display: "block", position: "relative", top: "150px", margin: "150px 100px"}}>
                <div>
                    <h2>Specialty Cakes</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock.</p>
                    <a href="#">PLACE AN ORDER NOW!</a>
                </div>
            </div>
        </section>
    )
}

export default HomeSpecialty