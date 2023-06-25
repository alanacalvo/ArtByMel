import React from "react";
import "./HomePage.scss";
import Header from "../../Components/Header/Header.js";
import HeroSection from "../../Components/HeroSection/HeroSection.jsx";
import ServicesSection from '../../Components/ServicesSection/ServicesSection'
import TestimonialsSection from '../../Components/TestimonialsSection/TestimonialsSection';
import AboutSection from "../../Components/AboutSection/AboutSection.jsx";
import Footer from "../../Components/Footer/Footer.js";

function HomePage() {
  return (
    <div className="homePage">
      <div className="hero-header">
        <Header />
      </div>
      <HeroSection />
      <div className="section-divider hero-divider"></div>
      <ServicesSection />
      <TestimonialsSection/>
      <div className="section-divider about-divider"></div>
      <AboutSection />
        <Footer />
    </div>
  )
}

export default HomePage