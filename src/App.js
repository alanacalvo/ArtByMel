import "./App.scss";
import ArtPage from "./Views/ArtPage/ArtPage";
import HomePage from "./Views/HomePage/HomePage";
import MakeupPage from "./Views/MakeupPage/MakeupPage";
import SfxPage from "./Views/SfxPage/SfxPage";
import TheatrePage from "./Views/TheatrePage/TheatrePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <MakeupPage />
      <SfxPage />
      <TheatrePage />
      <ArtPage />
    </div>
  );
}

export default App;
