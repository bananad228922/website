import logo from './logo.svg';
import './App.css';

// import global component
import Navigation from './components/navBar.js';
import Footer from './components/Footer.js';

// import pages
import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import ComponentKit from './pages/componentKit.js';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import './styles/styles.css';

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/componentKit" element={<ComponentKit />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
