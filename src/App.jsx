import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => window.scrollTo(0, 0), 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white w-full max-w-full overflow-x-hidden">
        <Navbar />
        {/* Scrolling Announcement Bar */}
        <div className="bg-dark-bg border-b border-neon-blue/20 marquee-wrapper py-1.5 sm:py-2">
          <div className="marquee-content text-xs sm:text-sm text-white font-medium tracking-wide">
            <span>🎉 <span className="text-neon-cyan">Free Automation Setup</span> + <span className="text-neon-blue">1 Month Free Trial</span> — Start your AI journey today! &nbsp;•&nbsp;</span>
            <span>🎉 <span className="text-neon-cyan">Free Automation Setup</span> + <span className="text-neon-blue">1 Month Free Trial</span> — Start your AI journey today! &nbsp;•&nbsp;</span>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;