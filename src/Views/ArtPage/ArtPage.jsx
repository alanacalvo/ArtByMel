import React, { useState } from "react";
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

const positiveQuotes = [
  {
    id: 1,
    quoteText: `"All our dreams can come true, if we have the courage to pursue them."`,
    author: "Walt Disney",
  },
  {
    id: 2,
    quoteText: `“In order to carry a positive action we must develop here a positive vision.”`,
    author: "Dalai Lama",
  },
  {
    id: 3,
    quoteText: `“Extraordinary things are always hiding in places people never think to look.”`,
    author: "Jodi Picoul",
  },
];

const ArtPage = () => {
  const [opacity, setOpacity] = useState({ opacity: "100%" });
  const [quote, setQuote] = useState(positiveQuotes[0].quoteText);
  const [author, setAuthor] = useState(positiveQuotes[0].author);
  // const [index, setIndex] = useState(positiveQuotes[0].id);

  setInterval(() => {
    setOpacity({ opacity: "0%" });
  }, 10000);

  setInterval(() => {
    setOpacity({ opacity: "100%" });
  }, 13000);

  // let quotes = [];
  // let authors = [];
  // let currentQuote = document.getElementById("positive-quote").textContent;
  // let currentAuthor = author;
  // console.log(currentQuote);

  // const displayQuotes = () => {
  //   if (
  //     currentQuote === positiveQuotes[0].quoteText &&
  //     currentAuthor === positiveQuotes[0].author
  //   ) {
  //     setQuote(positiveQuotes[1].quoteText);
  //     setAuthor(positiveQuotes[1].author);
  //   } else if (
  //     currentQuote === positiveQuotes[1].quoteText &&
  //     currentAuthor === positiveQuotes[1].author
  //   ) {
  //     setQuote(positiveQuotes[2].quoteText);
  //     setAuthor(positiveQuotes[2].author);
  //   } else if (
  //     currentQuote === positiveQuotes[2].quoteText &&
  //     currentAuthor === positiveQuotes[2].author
  //   ) {
  //     setQuote(positiveQuotes[0].quoteText);
  //     setAuthor(positiveQuotes[0].author);
  //   }
  // };

  // setInterval(() => {
  //   displayQuotes();
  // }, 13000);

  return (
    <>
      <Header />
      <div className="Art">
        <div className="quote-container">
          <p className="positive-quote" style={opacity} id="positive-quote">
            {quote}
          </p>
          <p className="quote-author" style={opacity}>
            - {author}
          </p>
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