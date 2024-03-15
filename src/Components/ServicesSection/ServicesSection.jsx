import React from "react";
// import { Link } from 'react-router-dom';
import ServicesCards from "../ReusableComponents/ServicesCards";
import "./ServicesSection.scss";

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="copy">
          <h4 className="section-title">Services Offered</h4>
          <h2 className="headline">Your Makeup Needs, Met.</h2>
          <h3 className="subtitle">
            Specializing in a variety of makeup and art services, so you can
            enjoy your special event.
          </h3>
        </div>
        <ServicesCards />
      </div>
    </section>
  );
}

export default ServicesSection;
