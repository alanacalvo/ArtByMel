import './App.scss';
import "./Components/HeroSection/HeroSection.jsx"
import HeroSection from './Components/HeroSection/HeroSection.jsx';
import "./Components/AboutSection/AboutSection.jsx"
import AboutSection from './Components/AboutSection/AboutSection.jsx';

function App() {
  return (
    <div className="App">
       
        <HeroSection/>
        <AboutSection/>
    </div>
  );
}

export default App;
