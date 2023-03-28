import React from "react";
import "./HomePage.scss";
import Header from "../../Components/Header/Header.js";
import HeroSection from "../../Components/HeroSection/HeroSection.jsx";
import AboutSection from "../../Components/AboutSection/AboutSection.jsx";
import Footer from "../../Components/Footer/Footer.js";

function HomePage() {
    return (
        <>
        <Header />
        <HeroSection />
        <div className="section-divider hero-divider"></div>
        <div className="section-divider about-divider"></div>
        <AboutSection />
        <Footer />
        </>
    )
}

export default HomePage;