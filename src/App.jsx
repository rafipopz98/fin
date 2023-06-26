import "./App.css";
import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
// import Item from "./components/Item";
import LandingPage from "./components/LandingPage";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import CalcPage from "./components/CalcPage";
import ScrollToTop from "./components/SmoothScrollbar";
// import FD from "./components/Pages/LoanCalculator";
import LoanCalculator from "./components/Pages/LoanCalculator";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Router>
        {/* <Routes> */}


        {/* <Route path="/" element={<LandingPage />}>
          <Route path="about" element={<About />} />
          <Route path="mostused" element={<Section />} />

          {/* <Route path="calculators" element={<CalcPage />} /> */}

        {/* </Route> */} *



          {/* <Route path="*" element={<NoPage />} /> */}

<LandingPage />

          <About />
          <Section />
          {/* <CalcPage /> */}
          {/* <LoanCalculator /> */}
        {/* </Routes> */}
        <Footer/>
      </Router>
    </>
  );
}

export default App;
