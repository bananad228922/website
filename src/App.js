// import tool
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import global component
import Navigation from './components/navBar.js';
import Footer from './components/Footer.js';

// import pages
import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import ComponentKit from './pages/componentKit.js';

import Portfolio_handCalender from "./pages/portfolio/portfolio_handCalender.js";
import Portfolio_weirdcore from "./pages/portfolio/portfolio_weirdcore.js";
import Portfolio_erratic from "./pages/portfolio/portfolio_erratic.js";
import TestUse from "./pages/testUse.js";

// CSS
import './styles/styles.css';
import './App.css';

// hooks
import ScrollToTop from './script/scrollToTop.js';

import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function App() {
    useLayoutEffect(() => {
        const lenis = new Lenis();
        window.lenis = lenis;

        // lenis.on("scroll", () => {
        //     console.log(lenis)
        // })

        lenis.on("scroll", ScrollTrigger.update());

        const update = (time) => {
            lenis.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        }
    }, [])

  return (
        <Router>
            <Navigation />

            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/componentKit" element={<ComponentKit />} />

                {/* portfolio */}
                <Route path='/portfolio_handCalender' element={<Portfolio_handCalender />} />
                <Route path='/portfolio_weirdcore' element={<Portfolio_weirdcore />} />
                <Route path='/portfolio_erratic' element={<Portfolio_erratic />} />
                <Route path='/testUse' element={<TestUse />} />
            </Routes>
        </Router>
  );
}

export default App;
