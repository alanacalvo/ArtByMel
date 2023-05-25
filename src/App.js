import "./App.scss";
import HomePage from "./Views/HomePage/HomePage";
import MakeupPage from "./Views/MakeupPage/MakeupPage";
import SfxPage from "./Views/SfxPage/SfxPage";
import TheatrePage from "./Views/TheatrePage/TheatrePage";
import "./Components/HeroSection/HeroSection.jsx";
import "./Components/AboutSection/AboutSection.jsx";
import "./App.scss";
import HomePage from "./Views/HomePage/HomePage";
import SchedulePage from "./Views/SchedulePage/SchedulePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <MakeupPage />
      <SfxPage />
      <TheatrePage />
    </div>
  );
}

export default App;
