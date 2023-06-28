import "./App.css";
import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ScrollToTop from "./components/SmoothScrollbar";
import Home from "./components/mainpgs/Home";
import CalcPage from "./components/CalcPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="mostused" element={<Section />} />
            <Route path="calculators" element={<CalcPage />} />
          </Route>

          {/* <Route path="*" element={<NoPage />} /> */}

          {/* <LandingPage /> */}

          {/* <About /> */}
          {/* <Section /> */}
          {/* <CalcPage /> */}
          {/* <LoanCalculator /> */}
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
