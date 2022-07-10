import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Custom imports
import "./App.css";
import Header from "./components/Header";
import TabletLanding from "./pages/TabletLanding";
import Starting from "./pages/Starting";
import MobileLanding from "./pages/MobileLanding";
import MobileAuth from "./pages/MobileAuth";
import TabletAuth from "./pages/TabletAuth";

function App() {
  return (
    <>
      <div>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Starting />} />
            <Route path="tablet" element={<TabletLanding />} />
            <Route path="mobile" element={<MobileLanding />} />
            <Route path="mobile-auth" element={<MobileAuth />} />
            <Route path="tablet-auth" element={<TabletAuth />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
