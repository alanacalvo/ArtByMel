import React from "react";
import "./ArtPage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PageHeading from "../../Components/ReusableComponents/PageHeading";
import ContactForm from "../../Components/ReusableComponents/ContactForm";

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
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/908/original/painting1.png?1699064683"
            alt="painting of a man holding a rose in one hand and a letter in the other"
            className="art-pic"
          />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/909/original/painting2.png?1699064691"
            alt="painting of a man sitting and crying into his hands with a tree growing from his back"
            className="art-pic"
          />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/915/original/painting-3.jpeg?1699066532"
            alt="painting of an African American woman with blue clothing and a blue headwrap on and gold earrings"
            className="art-pic"
          />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/916/original/painting-4.jpg?1699066556"
            alt="painting of a bunch of coconuts on a coconut tree"
            className="art-pic"
          />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/908/original/painting1.png?1699064683"
            alt="painting"
            className="art-pic"
          />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/909/original/painting2.png?1699064691"
            alt="painting"
            className="art-pic"
          />
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default ArtPage;
