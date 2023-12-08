import Header from "../../Components/Header/Header.jsx";
import HeroSection from "../../Components/HeroSection/HeroSection.jsx";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection";
import AboutSection from "../../Components/AboutSection/AboutSection.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="hero-header">
        <Header />
      </div>
      <HeroSection />
      <div className="section-divider hero-divider"></div>
      <ServicesSection />
      <TestimonialsSection />
      <div className="section-divider about-divider"></div>
      <AboutSection />
      <Footer />
    </div>
  );
};

export default HomePage;
