import "./App.scss";
import HomePage from "./Views/HomePage/HomePage";
import MakeupPage from "./Views/MakeupPage/MakeupPage";
import SfxPage from "./Views/SfxPage/SfxPage";

function App() {
  return (
    <div className="App">
     <HomePage />
     <MakeupPage />
     <SfxPage />
    </div>
  );
}

export default App;
