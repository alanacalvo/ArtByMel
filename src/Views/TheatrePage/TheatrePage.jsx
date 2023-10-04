import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./TheatrePage.scss";
import rec1 from "./TP photos/Rectangle 1.png";
import rec2 from "./TP photos/Rectangle 2.png";
import rec3 from "./TP photos/Rectangle 3.png";
import rec4 from "./TP photos/Rectangle 4.png";
import rec5 from "./TP photos/Rectangle 5.png";
import rec6 from "./TP photos/Rectangle 6.png";
import rec7 from "./TP photos/Rectangle 7.png";
import rec8 from "./TP photos/Rectangle 8.png";
import rec9 from "./TP photos/Rectangle 9.png";
import rec10 from "./TP photos/Rectangle 10.png";
import PageHeading from "../../Components/ReusableComponents/PageHeading";

function TheatrePage() {
  return (
    <>
      <Header />
      <div className="theatre-container">
        <PageHeading headline={"A gallery of beautiful bridal looks"} />

        <div className="sfx-gallery">
          <div className="TP-img div1">
            <img src={rec1} alt="makeup design" />
          </div>
          <div className="TP-img div2">
            <img src={rec2} alt="makeup design" />
          </div>
          <div className="TP-img div3">
            <img src={rec3} alt="makeup design" />{" "}
          </div>
          <div className="TP-img div4">
            <img src={rec4} alt="makeup design" />{" "}
          </div>
          <div className="TP-img div5">
            <img src={rec5} alt="makeup design" />{" "}
          </div>
          <div className="TP-img div6">
            <img src={rec6} alt="makeup design" />{" "}
          </div>
          <div className="TP-img div7">
            <img src={rec7} alt="makeup design" />{" "}
          </div>
          <div className="TP-img div8">
            <img src={rec8} alt="makeup design" />{" "}
          </div>
          <div className="TP-img div9">
            <img src={rec9} alt="makeup design" />{" "}
          </div>
          <div className="TP-img div10">
            <img src={rec10} alt="makeup design" />{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TheatrePage;
