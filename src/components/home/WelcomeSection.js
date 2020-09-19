import React from "react";
import VectorImage from "./VectorImage";

const WelcomeSection = () => {
    return (
        <section>
            <div>
                <h1>Welcome</h1>
                <VectorImage />
            </div>
            <div>
                <p>The standard chunk of Lorem Ipsum used since the 1500s
                    is reproduced below for those interested. Sections 1.10.32
                    and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                    are also reproduced in their exact original form, accompanied
                    by English versions from the 1914 translation by H. Rackham.</p>
            </div>
            <div>
                <a href="#" >USA, Los Angeles, 555 Some Street, SomeCity, CA 55555</a>
            </div>
            <div>
                <a href="#" >(555) 555 5555</a>
            </div>
        </section>
    )
}

export default WelcomeSection;