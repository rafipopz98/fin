import "./App.css";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/SmoothScrollbar";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <LandingPage />
      <About />
    </>
  );
}

export default App;
