import "./App.css";
import {NavLink , BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from "./components/About";
import Footer from "./components/Footer";
// import Item from "./components/Item";
import LandingPage from "./components/LandingPage";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
// import CalcPage from './components/CalcPage'
import ScrollToTop from "./components/SmoothScrollbar";
import FD from "./components/Pages/FD";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
    <Router>
      {/* <LandingPage /> */}
      {/* <About /> */}
      {/* <Section /> */}
      {/* <CalcPage /> */}
      {/* <Footer /> */}
      <FD />
      </Router>
    </>
  );
}

export default App;
