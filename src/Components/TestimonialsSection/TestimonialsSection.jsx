import React from 'react'
import './TestimonialsSection.scss'
import { useState } from 'react';

function TestimonialsSection() {

  // hooks
  const [currentSlide, setCurrentSlide] = useState(0)

  // data object
  const testimonials = [
    {
      id: "1",
      name: "Jane Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "assets/testimonial.png",
    },
    {
      id: "2",
      name: "Alana Keeton",
      text: "lorem25",
    },
  ];

  // map through data in object using hooks, on click
  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < testimonials.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <section className="testimonials-section">
      <div className="heading">
        <h4 className="section-title">TESTIMONIALS</h4>
        <h2 className="headline">See What My Satisfied Clients Have To Say</h2>
        <h3 className="subtitle">
          I value my clients’ feedback and I am proud to showcase their kind
          words.
        </h3>
      </div>
      <div className="border-breaker"></div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {testimonials.map((i) => (
          <div className="testimonial-container">
            <div className="testimonial">
              <div className="text-side">
                <div className="quote">
                  <div>
                    <span className="testimonial-author">{i.name}</span>
                    <div className="underline" style={{ width: "25em" }}></div>
                  </div>
                  <p className="testimonial-text">{i.text}</p>
                  <div className="left-par">"</div>
                  <div className="right-par">"</div>
                </div>
                <div className="slide-controls">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="prev-arrow"
                    onClick={() => handleClick("left")}
                  >
                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                  </svg>
                  <div className="slidenumber">
                    <span className="current-pg">{i.id}</span>{" "}
                    <span className="total-pgs">/ 5</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="next-arrow"
                    onClick={() => handleClick("right")}
                  >
                    <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
                  </svg>
                </div>
              </div>
              <div className="img-side">
                <img
                  src={i.image}
                  alt="Portrait of the author of the testimonial"
                  className="testimonial-img"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
