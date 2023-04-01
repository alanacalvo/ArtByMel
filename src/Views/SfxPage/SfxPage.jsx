import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SfxPage.scss";
import sfx1 from "./sfx photos/sfx1.png";
import sfx2 from "./sfx photos/sfx2.png";
import sfx3 from "./sfx photos/sfx3.png";
import sfx4 from "./sfx photos/sfx4.png";
import sfx5 from "./sfx photos/sfx5.png";
import sfx6 from "./sfx photos/sfx6.png";
import sfx7 from "./sfx photos/sfx7.png";
import sfx8 from "./sfx photos/sfx8.png";
import sfx9 from "./sfx photos/sgfx9.png";
import sfx10 from "./sfx photos/sfx10.png";
import sfx11 from "./sfx photos/sfx11.png";
import sfx12 from "./sfx photos/sfx12.png";
import sfx13 from "./sfx photos/sfx13.png";
import sfx14 from "./sfx photos/sfx14.png";


function SfxPage() {
return (
    <>
    <Header />
    <div className="sfx-container">
            <div className="section-title"><h3>gallery</h3></div>
            <div className="headline"><h2>A gallery of Stunning Looks</h2></div>
                <div className="subtitle">Created by Melvin Lozado</div>
               
        <div className="gallery">
            <div className="sfx-img div1"><img src={sfx1} alt="sfx makeup"/></div>
            <div className="sfx-img div2"><img src={sfx2} alt="sfx makeup"/></div>
            <div className="sfx-img div3"><img src={sfx3} alt="sfx makeup"/> </div>
            <div className="sfx-img div4"><img src={sfx4} alt="sfx makeup"/> </div>
            <div className="sfx-img div5"><img src={sfx5} alt="sfx makeup"/> </div>
            <div className="sfx-img div6"><img src={sfx6} alt="sfx makeup"/> </div>
            <div className="sfx-img div7"><img src={sfx7} alt="sfx makeup"/> </div>
            <div className="sfx-img div8"><img src={sfx8} alt="sfx makeup"/> </div>
            <div className="sfx-img div9"><img src={sfx9} alt="sfx makeup"/> </div>
            <div className="sfx-img div10"><img src={sfx10} alt="sfx makeup"/> </div>
            <div className="sfx-img div11"><img src={sfx11} alt="sfx makeup"/> </div>
            <div className="sfx-img div12"><img src={sfx12} alt="sfx makeup"/> </div>
            <div className="sfx-img div13"><img src={sfx13} alt="sfx makeup"/> </div>
            <div className="sfx-img div14"><img src={sfx14} alt="sfx makeup"/> </div>
            <div className="sfx-img div15"><img src={sfx1} alt="sfx makeup"/> </div>
            <div className="sfx-img div16"><img src={sfx11} alt="sfx makeup"/> </div>
        </div>

</div>
    <Footer />
    </>
  );
}

export default SfxPage;