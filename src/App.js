import "./App.scss";
<<<<<<< HEAD
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
=======
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
>>>>>>> 3c3e9700d1d14d69540de38a4412c8855a7b7a23
import MakeupPage from "./Views/MakeupPage/MakeupPage";
import SfxPage from "./Views/SfxPage/SfxPage";
import TheatrePage from "./Views/TheatrePage/TheatrePage";
import "./Components/HeroSection/HeroSection.jsx";
import "./Components/AboutSection/AboutSection.jsx";
<<<<<<< HEAD
import './App.scss';
import HomePage from './Views/HomePage/HomePage';
import SchedulePage from './Views/SchedulePage/SchedulePage';
=======
import "./App.scss";
import HomePage from "./Views/HomePage/HomePage";
import SchedulePage from "./Views/SchedulePage/SchedulePage";
import ArtPage from "./Views/ArtPage/ArtPage";
>>>>>>> 3c3e9700d1d14d69540de38a4412c8855a7b7a23

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/sfx' element={<SfxPage />}></Route>
          <Route path='/theatre' element={<TheatrePage />}></Route>
          <Route path='/book' element={<SchedulePage />}></Route>
=======
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sfx" element={<SfxPage />}></Route>
          <Route path="/makeup" element={<MakeupPage />}></Route>
          <Route path="/art" element={<ArtPage />}></Route>
          <Route path="/theatre" element={<TheatrePage />}></Route>
          <Route path="/book" element={<SchedulePage />}></Route>
>>>>>>> 3c3e9700d1d14d69540de38a4412c8855a7b7a23
        </Routes>
      </Router>
    </div>
  );
}

export default App;
