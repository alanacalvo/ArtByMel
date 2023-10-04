import "./App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MakeupPage from "./Views/MakeupPage/MakeupPage";
import SfxPage from "./Views/SfxPage/SfxPage";
import TheatrePage from "./Views/TheatrePage/TheatrePage";
import "./Components/HeroSection/HeroSection.jsx";
import "./Components/AboutSection/AboutSection.jsx";
import "./App.scss";
import HomePage from "./Views/HomePage/HomePage.jsx";
import SchedulePage from "./Views/SchedulePage/SchedulePage";
import ArtPage from "./Views/ArtPage/ArtPage";
import ScheduleForm from "./Components/ScheduleForm/ScheduleForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/book" element={<SchedulePage />}></Route>
          <Route path="/sfx" element={<SfxPage />}></Route>
          <Route path="/makeup" element={<MakeupPage />}></Route>
          <Route path="/art" element={<ArtPage />}></Route>
          <Route path="/theatre" element={<TheatrePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
