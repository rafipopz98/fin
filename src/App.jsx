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
// import ScrollToTop from "./components/SmoothScrollbar";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Navbar />
      <LandingPage />
      <About />
      <Section />
      {/* <CalcPage /> */}
      <Footer />
    </>
  );
}

export default App;
