import "./App.scss";
import "./Components/HeroSection/HeroSection.jsx";
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import "./Components/AboutSection/AboutSection.jsx";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";
import './App.scss';
import HomePage from './Views/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <div className="section-divider hero-divider"></div>
      <div className="section-divider about-divider"></div>
      <AboutSection />
        <HomePage/>
    </div>
  );
}

export default App;
