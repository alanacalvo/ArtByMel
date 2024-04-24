import { useState, useEffect } from "react";
import "./PositiveQuotes.scss";

const PositiveQuotes = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const quotes = [
    {
      quote:
        "All our dreams can come true, if we have the courage to pursue them.",
      author: "- Walt Disney",
    },
    {
      quote:
        "In order to carry a positive action we must develop here a positive vision.",
      author: "- Dalai Lama",
    },
    {
      quote:
        "Extraordinary things are always hiding in places people never think to look.",
      author: "- Jodi Picoul",
    },
  ];

  const [randomQuote, setRandomQuote] = useState(0);

  // Display a different quote from the quotes array on every render
  useEffect(() => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setRandomQuote(randomQuote);
  }, [quotes]);

  const { quote, author } = quotes[randomQuote];

  return (
    <div className="positive-quotes-container">
      <div className="quote-container">
        <blockquote className="positive-quote">{quote}</blockquote>
        <p className="quote-author">{author}</p>
      </div>
    </div>
  );
};

export default PositiveQuotes;
