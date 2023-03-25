import React from "react";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="hero-container">
        <div className="headline">
          <h1>Melvin Lozada</h1>
          <div className="subtitle">Get flawless Looks for any Occasion</div>
          <button className="book">Book With Melvin</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;