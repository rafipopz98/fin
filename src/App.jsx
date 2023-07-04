import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ScrollToTop from "./components/SmoothScrollbar";
import Home from "./components/mainpgs/Home";
import CalcPage from "./components/CalcPage";
import Footer from "./components/Footer";
import Fd from "./components/Pages/Fd";

function App() {
  return (
    <>
      <ScrollToTop />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/mostused" element={<Section />} />
          <Route exact path="/calculators" element={<CalcPage />} />
          <Route exact path="/fd" element={<Fd />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
