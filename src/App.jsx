import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Company from './pages/Company';
import Contact from './pages/Contact';

// Scroll Handler Component
const ScrollHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />

          {/* SEO Routes that redirect/scroll to Home sections */}
          <Route path="/technology" element={<Home section="tech" />} />
          <Route path="/logistics" element={<Home section="logi" />} />
          <Route path="/real-estate" element={<Home section="re" />} />
          <Route path="/investments" element={<Home section="cap" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
