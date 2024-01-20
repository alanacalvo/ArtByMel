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
      <Header />
      <HeroSection />
      <div className="section-divider hero-divider"></div>
      <ServicesSection />
      <TestimonialsSection />
      <div className="section-divider about-divider"></div>
      <AboutSection />
      <Footer />
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> 69b0997bab5546dc66b9cc5ca08b6734b586e000

export default HomePage;
