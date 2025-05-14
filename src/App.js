// import tool
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import global component
import Navbar from './components/navbar/navbar.js';
import Footer from './components/footer/Footer.js';

// import pages
import Home from './pages/home/home.js';
import Portfolio from './pages/Portfolio.js';
import ComponentKit from './pages/kit/kit.js';

import Portfolio_handCalender from "./pages/portfolio/portfolio_handCalender.js";
import Portfolio_weirdcore from "./pages/portfolio/portfolio_weirdcore.js";
import Portfolio_erratic from "./pages/portfolio/portfolio_erratic.js";
import TestUse from "./pages/testUse.js";

// CSS
import './styles/styles.css';

// hooks
import ScrollToTop from './script/scrollToTop.js';

import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { UiDesign } from "./components/3d/uiDesign.js";
import { Icon3d, TestIcon3d } from "./components/3d/icon3d.js";
import ScrollBanner, { TestScrollBanner } from "./components/text-animation/ScrollBanner.js";
import { EntryLetters, TestFadein } from "./components/entryExitEffect.js";
import { TestBackground3d } from "./components/3d/background3d.js";
import { TestPortfolio3d } from "./components/3d/portfolio3d.js";
import { TestMousefollow } from "./components/mousefollow/mousefollow.js";
import { TestEventLoop } from "./test/testAsyncRecycle.js";
import { TestLoadingPage } from "./components/loadingPage/LoadingPage.js";

gsap.registerPlugin(ScrollTrigger);
function App() {
    useLayoutEffect(() => {
        const lenis = new Lenis();
        window.lenis = lenis;

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
            <Navbar />

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
                <Route path="/testUiDesign" element={<UiDesign />} />
                <Route path="/test3dIcon" element={<testIcon3d />} />
                <Route path="/testScrollBanner" element={<TestScrollBanner />} />
                <Route path="/testFadein" element={<TestFadein />} />
                <Route path="/test3dBackground" element={<TestBackground3d />} />
                <Route path="/testPortfolio3d" element={<TestPortfolio3d />} />
                <Route path="/testMousefollow" element={<TestMousefollow />} />
                <Route path="/testEventLoop" element={<TestEventLoop />} />
                <Route path="/testLoadingPage" element={<TestLoadingPage />} />
                
            </Routes>
        </Router>
  );
}

export default App;
