import "./App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MakeupPage from "./Views/MakeupPage/MakeupPage";
import SfxPage from "./Views/SfxPage/SfxPage";
import BridalPage from "./Views/BridalPage/BridalPage";
import "./Components/HeroSection/HeroSection.jsx";
import "./Components/AboutSection/AboutSection.jsx";
import "./App.scss";
import HomePage from "./Views/HomePage/HomePage.jsx";
import SchedulePage from "./Views/SchedulePage/SchedulePage";
import ArtPage from "./Views/ArtPage/ArtPage";
<<<<<<< HEAD
// import ScheduleForm from "./Components/ScheduleForm/ScheduleForm";
=======
import ScheduleForm from "./Components/ScheduleForm/ScheduleForm";
>>>>>>> 69b0997bab5546dc66b9cc5ca08b6734b586e000

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
<<<<<<< HEAD
          {/* <Route path="/book" element={<ScheduleForm />}></Route> */}
          <Route path="/sfx" element={<SfxPage />}></Route>
          <Route path="/makeup" element={<MakeupPage />}></Route>
          <Route path="/art" element={<ArtPage />}></Route>
          <Route path="/bridal" element={<BridalPage />}></Route>
          <Route path="/book" element={<SchedulePage />}></Route>
=======
          <Route path="/book" element={<SchedulePage />}></Route>
          <Route path="/sfx" element={<SfxPage />}></Route>
          <Route path="/makeup" element={<MakeupPage />}></Route>
          <Route path="/art" element={<ArtPage />}></Route>
          <Route path="/theatre" element={<TheatrePage />}></Route>
>>>>>>> 69b0997bab5546dc66b9cc5ca08b6734b586e000
        </Routes>
      </Router>
    </div>
  );
}

export default App;
