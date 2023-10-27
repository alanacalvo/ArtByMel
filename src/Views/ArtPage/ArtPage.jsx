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
import ContactForm from "../../Components/ReusableComponents/ContactForm";
import PageHeading from "../../Components/ReusableComponents/PageHeading";

// const positiveQuotes = [
//   {
//     id: 0,
//     quoteText: `"All our dreams can come true, if we have the courage to pursue them."`,
//     author: "Walt Disney",
//   },
//   {
//     id: 1,
//     quoteText: `“In order to carry a positive action we must develop here a positive vision.”`,
//     author: "Dalai Lama",
//   },
//   {
//     id: 2,
//     quoteText: `“Extraordinary things are always hiding in places people never think to look.”`,
//     author: "Jodi Picoul",
//   },
// ];

const ArtPage = () => {
  return (
    <>
      <Header />
      <div className="Art">
        <div className="quote-container">
          <p className="positive-quote" id="positive-quote">
            "All our dreams can come true, if we have the courage to pursue
            them."
          </p>
          <p className="quote-author">- Walt Disney</p>
        </div>
        <PageHeading
          headline={
            "A journey through colors and brushstrokes in captivating paintings"
          }
        />
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
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default ArtPage;
