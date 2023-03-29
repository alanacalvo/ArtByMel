import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./MakeupPage.scss"
// import "./Photos"

function MakeupPage() {
 return (
    <>
    <Header /> 
        <div className="makeup-container">
            <div className="section-title"><h3>gallery</h3>
            <div className="headline"><h2>A gallery of stunning looks</h2></div>
                <div className="subtitle"><subheading>Created by Melvin Lozado</subheading></div>

                <div class="parent">
<div class="div1"><img src="./Photos/photo1.jpg" /></div>
<div class="div2"> </div>
<div class="div3"> </div>
<div class="div4"> </div>
<div class="div5"> </div>
<div class="div6"> </div>
<div class="div7"> </div>
<div class="div8"> </div>
<div class="div9"> </div>
<div class="div10"> </div>
<div class="div11"> </div>
<div class="div12"> </div>
<div class="div13"> </div>
<div class="div14"> </div>
<div class="div15"> </div>
<div class="div16"> </div>
</div>

</div>

         
        </div>
    <Footer />
    </>
 );
}

export default MakeupPage;