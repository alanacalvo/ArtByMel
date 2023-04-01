import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function TheatrePage() {
    return (
        <>
        <Header />
        <div className="theatre-container">
            <div className="section-title"><h3>gallery</h3></div>
            <div className="headline"><h2>A Showcase of Spectacular Costume Creations</h2></div>
                <div className="subtitle">Created by Melvin Lozado</div>
        </div>      
        <Footer />
        </>
    )
}

export default TheatrePage;