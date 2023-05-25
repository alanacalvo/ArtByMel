import React from "react";
import "./ArtPage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import painting1 from "./Photos/painting1.png";
import painting2 from "./Photos/painting2.png";
import painting3 from "./Photos/painting3.png";
import painting4 from "./Photos/painting4.png";
import painting5 from "./Photos/painting5.png";
import painting6 from "./Photos/painting6.png";

const ArtPage = () => {
  return (
    <>
      <Header />
      <div className="Art">
        <div className="quote">
          <p className="positive-quote">
            "All our dreams can come true, if we have the courage to pursue
            them."
          </p>
          <p className="quote-arthur">- Walt Disney</p>
        </div>
        <h4>Gallery</h4>
        <h2>
          A journey through colors and brushstrokes in captivating paintings
        </h2>
        <h3>Created by Melvin Lozada</h3>
        <div className="art-gallery">
          <img
            src={painting1}
            alt="painting of a man holding a rose in one hand and a letter in the other"
            className="art-pic"
          />
          <img
            src={painting2}
            alt="painting of a man sitting and crying into his hands with a tree growing from his back"
            className="art-pic"
          />
          <img src={painting3} alt="painting" className="art-pic" />
          <img src={painting4} alt="painting" className="art-pic" />
          <img src={painting5} alt="painting" className="art-pic" />
          <img src={painting6} alt="painting" className="art-pic" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArtPage;
