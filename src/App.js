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
import MobileAuth from "./pages/MobileAuth";


function App() {
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Starting />} />
          <Route path="/laptop" element={<LaptopLanding />} />
          <Route path="/mobile" element={<MobileLanding />} />
          <Route path="mobile-auth" element={<MobileAuth />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
