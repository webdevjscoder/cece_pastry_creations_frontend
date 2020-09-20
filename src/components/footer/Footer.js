import React from "react";

export default function Footer() {

    const footerStyle = {
        backgroundColor: "#cce4db",
        color: "#9c77a9",
        fontFamily: "Serif",
        fontSize: "18px",
    }

    return (
        <footer className='footer text-white' style={{backgroundColor: "#cce4db", padding: "60px"}}>
            <div className='container text-center' style={footerStyle}>
                <span>
                 Copyright &copy; 2020 Cece Pastry Creations
                </span>
                <br/>
                <small>Created by: webdevjscoder</small>
            </div>
        </footer>
    )
}