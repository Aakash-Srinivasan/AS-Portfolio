import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Particle from "./components/Particle";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "./components/ScrollReveal";
import FloatingCTA from "./components/FloatingCTA";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Articles from "./components/Articles/Articles";

function App() {
  const [load, upadateLoad] = useState(true);

  // Waits for the page to actually finish loading (not a fixed delay), with
  // a short minimum so the preloader doesn't flash on an instant/cached
  // load, and a safety cap in case `load` is held up by a slow resource.
  useEffect(() => {
    let minTimeElapsed = false;
    let pageLoaded = document.readyState === "complete";

    const tryHide = () => {
      if (minTimeElapsed && pageLoaded) upadateLoad(false);
    };

    const minTimer = setTimeout(() => {
      minTimeElapsed = true;
      tryHide();
    }, 400);

    const onLoad = () => {
      pageLoaded = true;
      tryHide();
    };

    if (pageLoaded) {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    const maxTimer = setTimeout(() => upadateLoad(false), 4000);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Particle />
        <Navbar />
        <ScrollToTop />
        <ScrollReveal />
        <FloatingCTA />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
