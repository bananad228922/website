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


function App() {


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
      
      <Footer />
    </Router>
  );
}

export default App;
