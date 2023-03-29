import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./MakeupPage.scss"

function MakeupPage() {
 return (
    <>
        <Header /> 
        <div className="makeup-container">
        <div className="section-title">
                <h3>gallery</h3>
        </div>
        <div className="headline">
            <h2>A gallery of stunning looks</h2>
        </div>
         
        </div>
    <Footer />
    </>
 );
}

export default MakeupPage;