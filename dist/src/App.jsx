import { useState, useEffect, useRef } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsitesShowcase from './components/txzFiveMWebsites';
import BossMenu from './components/bossmenu';
import logoIcon from './assets/logoIcon.png';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

import bossIMG from './assets/bossmenudash.png'


function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTitle, setActiveTitle] = useState('Boss Menu'); 
  const [showProducts, setShowProducts] = useState(false);
  
  const mechanicTabletRef = useRef(null);
  const WebsitesShowcaseRef = useRef(null);
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
            setActiveTitle('Boss Menu');
          } else if (entry.target === WebsitesShowcaseRef.current) {
            setActiveTitle('Websites');
          }
        }
      });
    }, observerOptions);

    if (mechanicTabletRef.current) observer.observe(mechanicTabletRef.current);
    if (WebsitesShowcaseRef.current) observer.observe(WebsitesShowcaseRef.current);

    return () => {
      if (mechanicTabletRef.current) observer.unobserve(mechanicTabletRef.current);
      if (WebsitesShowcaseRef.current) observer.unobserve(WebsitesShowcaseRef.current);
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
              <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
                <nav className="navbar-container">
                  <h3>
                    <a href="http://localhost:5173">
                      <img className="logoImg" src={logoIcon} alt="Logo" />
                    </a>
                  </h3>
                  <h3><a href="https://taxzyyyscripts.tebex.io/">Store</a></h3>
                  
                  <h3 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                  >
                    Products <FontAwesomeIcon icon={faChevronDown} />
                    <div 
                      className={`products-container ${showProducts ? 'show' : ''}`} 
                      onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="products-items">
                        <a href='/bossmenu'>
                          <div className='products-item'>
                            <div className='products-header'>
                              <img className="products-logoImg" src={logoIcon} alt="Logo" />
                              <div className='products-title'>Boss Menu</div>
                            </div>
                            <div className='products-description'>
                              An advanced FiveM Mechanic tablet designed to streamline vehicle repairs, upgrades, and diagnostics.
                            </div>
                          </div>
                        </a>

                        <a href='/txzFiveMWebsites'>
                          <div className='products-item'>
                            <div className='products-header'>
                              <img className="products-logoImg" src={logoIcon} alt="Logo" />
                              <div className='products-title'>Websites</div>
                            </div>
                            <div className='products-description'>
                              Custom-built websites tailored for various needs like FiveM servers, webshops, portfolios and even more.
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </h3>

                  <h3><a href="https://docs.taxzyyyscripts.xyz">Docs</a></h3>

                  <div className="socials-wrapper">
                    <a href="https://discord.gg/5Y8hqr64fJ">
                      <FontAwesomeIcon className='social-icon' id="discord-icon" icon={faDiscord} />
                    </a>
                    <a href="https://github.com/TaxiMax1">
                      <FontAwesomeIcon className='social-icon' id="github-icon" icon={faGithub} />
                    </a>
                  </div>
                </nav>
              </header>

              <section className={`scripts-container ${scrolled ? 'scrolled' : ''}`}>
                <div className='preview-script'>
                  <p>{activeTitle}</p> 
                  <div className='demo-button'>
                    <a href=""><button className='buy-button'>Purchase</button></a>
                    <a href=''><button className='buy-button' id="preview-showcase-button">Showcase</button></a>
                  </div>
                </div>
              </section>

              <a href='/bossmenu' style={{ textDecoration: 'none'}}>
                <section className='showcase-container' ref={mechanicTabletRef}>
                  <div className='mechanic-tablet'>
                    <h1>Boss Menu</h1>
                    <h3>Most Unique And Advanced Boss Menu</h3>
                    <div className='supported-frameworks'><p>ESX</p></div>
                    
                    <a href='/bossmenu'><button className='showcase-button'>Purchase</button></a>
                    <a href=''><button className='showcase-button' id='showcase-showcase-button'>Showcase</button></a>
                  </div>

                  <img src={bossIMG} className="showcase-img" />
                </section>
              </a>

              <a href='/txzFiveMWebsites' style={{ textDecoration: 'none'}}>
                <section className='showcase-container' ref={WebsitesShowcaseRef}>
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
        
        <Route path="/bossmenu" element={<BossMenu />} />
        <Route path="/txzFiveMWebsites" element={<WebsitesShowcase />} />
      </Routes>
    </Router>
  );
}

export default App;