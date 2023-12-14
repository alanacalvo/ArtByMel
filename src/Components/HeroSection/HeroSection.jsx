import React from "react";
import "./HeroSection.scss";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-heading">
          <h1>Melvin Lozada</h1>
          <div className="subheading">Get flawless Looks for any Occasion</div>
          <Link to={"/book"} className="book">
            Book With Melvin
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
