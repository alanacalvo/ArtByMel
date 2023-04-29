import "./App.scss";
import HomePage from "./Views/HomePage/HomePage";
import MakeupPage from "./Views/MakeupPage/MakeupPage";
import SfxPage from "./Views/SfxPage/SfxPage";
import TheatrePage from "./Views/TheatrePage/TheatrePage";
import "./Components/HeroSection/HeroSection.jsx";
import "./Components/AboutSection/AboutSection.jsx";
import './App.scss';
import HomePage from './Views/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <div className="section-divider hero-divider"></div>
      <div className="section-divider about-divider"></div>
      <AboutSection />
    </div>
  );
}

export default App;
