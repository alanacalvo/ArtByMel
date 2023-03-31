import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SfxPage.scss";
import photo1 from "../MakeupPage/Photos/photo1.png";

function SfxPage() {
return (
    <>
    <Header />
    <div className="sfx-container">
            <div className="section-title"><h3>gallery</h3></div>
            <div className="headline"><h2>A Gallery Of Special Effects</h2></div>
                <div className="subtitle">Created by Melvin Lozado</div>
               
        <div className="gallery">
            <div className="sfx-img div1"><img src={photo1} alt="makeup design"/></div>
            <div className="sfx-img div2"><img src={photo1} alt="makeup design"/></div>
            <div className="sfx-img div3"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div4"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div5"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div6"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div7"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div8"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div9"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div10"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div11"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div12"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div13"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div14"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div15"><img src={photo1} alt="makeup design"/> </div>
            <div className="sfx-img div16"><img src={photo1} alt="makeup design"/> </div>
        </div>

</div>
    <Footer />
    </>
  );
}

export default SfxPage;