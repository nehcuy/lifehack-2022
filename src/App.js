import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Custom imports
import "./App.css";
import Header from "./components/Header";
import LockButton from "./components/LockButton";
import LaptopLanding from "./components/LaptopLanding";
import Starting from "./components/Starting";
import MobileLanding from "./pages/MobileLanding";


function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Starting />} />
          <Route path="/laptop" element={<LaptopLanding />} />
          <Route path="/mobile" element={<MobileLanding />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
