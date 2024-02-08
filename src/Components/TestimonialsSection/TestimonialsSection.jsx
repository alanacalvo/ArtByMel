import React from "react";
import "./TestimonialsSection2.scss";
import { useState } from "react";

function TestimonialsSection() {
  // hooks
  const [currentSlide, setCurrentSlide] = useState(0);

  // data object
  const testimonials = [
    {
      id: "1",
      name: "Sara",
      text: "Melvin is a brilliant makeup artist with such a creative vision that is brought to life and exceeds expectations. When I sit in the makeup chair, I know I’m going to stand up feeling liberated! I can count on Melvin for having such a massive range of talent because any event, any look, any possibility comes so effortlessly from this artist. If you want just a face of makeup you could go to anyone, but if you want an experience that is genuine and authentically beautiful, every single time, Melvin’s THE one. Thankful that I have someone to plan exciting future looks with, and in the process developed one of the best friendships I will cherish forever.",
      image: "assets/testimonial.png",
    },
    {
      id: "2",
      name: "Anavid",
      text: "What a great experience. Melvin is a fantastic artist. He asked the right questions, understood my requests and delivered beautiful makeup creations for both my wedding and most recently for my birthday. Once you meet him, he'll be your artist for life!",
      image: "assets/testimonial.png",
    },
    {
      id: "3",
      name: "Gabe",
      text: "Melvin's love and passion for doing makeup starts with making sure each and every person has their own identity! He made my face fit me from the color pallets and pop of sparkle to my lips! It was a custom experience that I will forever cherish. He also taught me how to do certain looks as he did my pre trial makeup and my final look! Melvin travels y’all!💕 Oh my was it important to have an artist that was willing to go the extra mile Melvin is for your next event, you will thank me later!",
      image: "assets/testimonial.png",
    },
    {
      id: "4",
      name: "Erica",
      text: "Melvin is so talented! Every look we have done has been amazing. His skills are unmatched! Highly recommend.",
      image: "assets/testimonial.png",
    },
    {
      id: "5",
      name: "Lorraine",
      text: "Melvin did my makeup for my tea party and my pageant! He did my makeup so good that if I could sleep with it, I would! Also, I wanted to have Marilyn Monroe inspired makeup for my pageant and he made it happen. It also stayed all night! I would say that Melvin is the best artist there is!! I’ll be sure to book him again.",
      image: "assets/testimonial.png",
    },
    {
      id: "6",
      name: "Sterling",
      text: "I work with Melvin a lot personally and professionally and he continues to blow me away with every single appointment. His professionalism is top tier and my favorite thing about how he works, is he gives extensive knowledge about what he’s doing to your face. The products used, the health benefits, tips, tricks, etc. In this photo here he was asked to give a post crying glam look and he absolutely blew my expectations out of the water. There’s no one else I would trust to execute an idea than Melvin.",
      image: "assets/testimonial.png",
    },
    {
      id: "7",
      name: "Delaney",
      text: "Melvin mastered the art of not only making me look beautiful, but also feel beautiful. My favorite part about every look is how sharp, sleek, and clean it always looks, he truly perfects the face in every aspect. Melvin is truly an experience whether it be a photoshoot, a wedding, or just wanting to feel beautiful, Melvin always achieves & exceeds my expectations!",
      image: "assets/testimonial.png",
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
          I value my clients’ feedback and I am proud
          <br /> to showcase their kind words.
        </h3>
      </div>
      {/* <div className="border-breaker"></div> */}
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {testimonials.map((i) => (
          <div className="testimonial-container" key={i.id}>
            <div className="testimonial">
              <div className="border"></div>
              <div className="text-side">
                <div className="quote">
                  <div>
                    <span className="testimonial-author">{i.name}</span>
                    <div className="underline" style={{ width: "20em" }}></div>
                  </div>
                  {/* <div className="left-par">"</div> */}
                  <p className="testimonial-text">{i.text}</p>
                  {/* <div className="right-par">"</div> */}
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
                    <span className="total-pgs">/ 7</span>
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
