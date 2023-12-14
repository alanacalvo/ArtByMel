import { useCallback, useEffect, useState } from "react";
import "./PositiveQuotes.scss";

const allQuotes = [
  "All our dreams can come true, if we have the courage to pursue them.",
  "In order to carry a positive action we must develop here a positive vision.",
  "Extraordinary things are always hiding in places people never think to look.",
];

const allAuthors = ["- Walt Disney", "- Dalai Lama", "- Jodi Picoul"];

const PositiveQuotes = () => {
  const [quote, setQuote] = useState(allQuotes[0].quote);
  const [author, setAuthor] = useState(allQuotes[0].author);
  const [opacity, setOpacity] = useState(1);

  // utilizing the useCallback hook here to store the shuffle function between re-renders
  const shuffle = useCallback(() => {
    const i = Math.floor(Math.random() * allQuotes.length);
    setQuote(allQuotes[i]);
    setAuthor(allAuthors[i]);
  }, []); // no dependecies for this function so the function will continue the same on every render

  useEffect(() => {
    const int = setInterval(shuffle, 13000);
    return () => clearInterval(int);
  }, [shuffle]);

  useEffect(() => {
    const fadeOut = () => setOpacity(0);
    const fadeIn = () => setOpacity(1);

    setInterval(fadeOut, 10000);
    setInterval(fadeIn, 13000);
  }, []);

  return (
    <div className="positive-quotes-container">
      <div className="quote-container" style={{ opacity: opacity }}>
        <blockquote className="positive-quote">{quote}</blockquote>
        <p className="quote-author">{author}</p>
      </div>
    </div>
  );
};

export default PositiveQuotes;
