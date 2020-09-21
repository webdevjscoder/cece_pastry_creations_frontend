import React from "react";

export default function vectorImage() {
    return (
            <>
                <img src={process.env.PUBLIC_URL + '/vector-image.jpg'}
                    alt="vector line"/>
            </>
    );
}