import "./App.scss";
import "./Components/HeroSection/HeroSection.jsx";
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import "./Components/AboutSection/AboutSection.jsx";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div className="section-divider hero-divider"></div>
      <div className="section-divider about-divider"></div>
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
