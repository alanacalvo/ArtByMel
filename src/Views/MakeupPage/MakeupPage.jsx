import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./MakeupPage.scss";
import photo1 from "./Photos/photo1.png";
import photo2 from "./Photos/photo2.png";
import photo3 from "./Photos/photo3.png";
import photo4 from "./Photos/photo4.png";
import photo5 from "./Photos/photo5.png";
import photo6 from "./Photos/photo6.png";
import photo7 from "./Photos/photo7.png";
import photo8 from "./Photos/photo8.png";
import photo9 from "./Photos/photo9.png";
import photo10 from "./Photos/photo10.png";
import photo11 from "./Photos/photo11.png";
import photo12 from "./Photos/photo12.png";
import photo13 from "./Photos/photo13.png";
import photo14 from "./Photos/photo14.png";
import photo15 from "./Photos/photo15.png";
import photo16 from "./Photos/photo16.png";

function MakeupPage() {
  return (
    <>
      <Header />
      <div className="makeup-container">
        <h4 className="section-title">gallery</h4>
        <h2 className="headline">A Gallery of Stunning Looks</h2>
        <h3 className="subtitle">Created by Melvin Lozado</h3>

        <div className="sfx-gallery">
          <div className="look-img div1">
            <img src={photo1} alt="makeup design" />
          </div>
          <div className="look-img div2">
            <img src={photo2} alt="makeup design" />
          </div>
          <div className="look-img div3">
            <img src={photo3} alt="makeup design" />{" "}
          </div>
          <div className="look-img div4">
            <img src={photo4} alt="makeup design" />{" "}
          </div>
          <div className="look-img div5">
            <img src={photo11} alt="makeup design" />{" "}
          </div>
          <div className="look-img div6">
            <img src={photo6} alt="makeup design" />{" "}
          </div>
          <div className="look-img div7">
            <img src={photo7} alt="makeup design" />{" "}
          </div>
          <div className="look-img div8">
            <img src={photo8} alt="makeup design" />{" "}
          </div>
          <div className="look-img div9">
            <img src={photo9} alt="makeup design" />{" "}
          </div>
          <div className="look-img div10">
            <img src={photo10} alt="makeup design" />{" "}
          </div>
          <div className="look-img div11">
            <img src={photo16} alt="makeup design" />{" "}
          </div>
          <div className="look-img div12">
            <img src={photo12} alt="makeup design" />{" "}
          </div>
          <div className="look-img div13">
            <img src={photo13} alt="makeup design" />{" "}
          </div>
          <div className="look-img div14">
            <img src={photo14} alt="makeup design" />{" "}
          </div>
          <div className="look-img div15">
            <img src={photo15} alt="makeup design" />{" "}
          </div>
          <div className="look-img div16">
            <img src={photo5} alt="makeup design" />{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MakeupPage;
