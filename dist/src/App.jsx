import { useState, useEffect, useRef } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import logoIcon from './assets/logoIcon.png';
import MechanicTablet from './components/mechanictablet';
import Websites from './components/Websites';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTitle, setActiveTitle] = useState('Mechanic Tablet'); 
  const [showProducts, setShowProducts] = useState(false);
  
  const mechanicTabletRef = useRef(null);
  const policeTabletRef = useRef(null);
  const dropdownTimeout = useRef(null); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, 
      threshold: 1,
    };    

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === mechanicTabletRef.current) {
            setActiveTitle('Mechanic Tablet');
          } else if (entry.target === policeTabletRef.current) {
            setActiveTitle('Websites');
          }
        }
      });
    }, observerOptions);

    if (mechanicTabletRef.current) observer.observe(mechanicTabletRef.current);
    if (policeTabletRef.current) observer.observe(policeTabletRef.current);

    return () => {
      if (mechanicTabletRef.current) observer.unobserve(mechanicTabletRef.current);
      if (policeTabletRef.current) observer.unobserve(policeTabletRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setShowProducts(true);
  };
  
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setShowProducts(false);
    }, 100); 
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <div>
              <section className={`scripts-container ${scrolled ? 'scrolled' : ''}`}>
                <div className='preview-script'>
                  <p>{activeTitle}</p> 
                  <a href="#">
                    <button className='buy-button'>Purchase</button>
                    <button className='buy-button' id="preview-showcase-button">Showcase</button>
                 </a>
                </div>
              </section>

              <a href='/mechanictablet' style={{ textDecoration: 'none'}}>
                <section className='showcase-container' ref={mechanicTabletRef}>
                  <div className='mechanic-tablet'>
                    <h1>Mechanic Tablet</h1>
                    <h3>Most Unique And Advanced Mechanic Tablet</h3>
                    <div className='supported-frameworks'><p>ESX</p></div>
                    <button className='showcase-button'>Purchase</button>
                    <button className='showcase-button' id='showcase-showcase-button'>Showcase</button>
                  </div>
                </section>
              </a>

              <a href='/websites' style={{ textDecoration: 'none'}}>
                <section className='showcase-container' ref={policeTabletRef}>
                  <div className='police-tablet'>
                    <h1>Websites</h1>
                    <h3>A simple modern website for your Store, FiveM Server or Documentation</h3>
                    <div className='supported-frameworks' style={{ marginLeft: '265px'}}><p>ESX</p></div>
                    <button className='showcase-button'>Purchase</button>
                    <button className='showcase-button' id='showcase-showcase-button'>Showcase</button>
                  </div>
                </section>
              </a> 

              <footer className='footer-container'>
                <div className='copyright'>
                  <img className="footer-logoImg" src={logoIcon} alt="Logo" />
                  <span>Copyright © 2025 - Taxzyyy Scripts, All rights reserved.</span>
                </div>

                <div className='footer-title'>Taxzyyy Scripts</div>

                <div className='footer-socials'>
                  <a href='https://docs.taxzyyyscripts.xyz' >Docs</a>
                  <a href='https://discord.gg/5Y8hqr64fJ' >Discord</a>
                </div>
              </footer>
            </div>
          </>
        } />
        
        <Route path="/mechanictablet" element={<MechanicTablet />} />
      </Routes>
    </Router>
  );
}

export default App;