import React from 'react'
import './HomePage.scss'
import HeroSection from "../../Components/HeroSection/HeroSection.jsx";
import AboutSection from "../../Components/AboutSection/AboutSection.jsx";
import ServicesSection from '../../Components/ServicesSection/ServicesSection'
import TestimonialsSection from '../../Components/TestimonialsSection/TestimonialsSection';

function HomePage() {
  return (
    <div className='homePage'>
      <HeroSection />
      <div className="section-divider hero-divider"></div>
      <ServicesSection />
      <TestimonialsSection/>
      <div className="section-divider about-divider"></div>
      <AboutSection />
    </div>
  )
}

export default HomePage