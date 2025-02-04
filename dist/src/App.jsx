import { useState, useEffect, useRef } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MechanicTablet from './component/mechanictablet';
import logoIcon from './assets/logoIcon.png';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTitle, setActiveTitle] = useState('Mechanic Tablet'); 

  const mechanicTabletRef = useRef(null);
  const policeTabletRef = useRef(null);

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
            setActiveTitle('FiveM Script');
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
                  <h3><a href="">Store</a></h3>
                  <h3><a href="">Products <FontAwesomeIcon icon={faChevronDown} /></a></h3>
                  <h3><a href="https://docs.taxzyyyscripts.xyz">Docs</a></h3>
                  <h3>
                    <a href="https://discord.gg/5Y8hqr64fJ">
                      <FontAwesomeIcon className='socials-container' id="discord-icon" icon={faDiscord} />
                    </a>
                  </h3>
                  <h3>
                    <a href="https://github.com/TaxiMax1">
                      <FontAwesomeIcon className='socials-container' id="github-icon" icon={faGithub} />
                    </a>
                  </h3>
                </nav>
              </header>

              <section className={`scripts-container ${scrolled ? 'scrolled' : ''}`}>
                <div className='preview-script'>
                  <p>{activeTitle}</p> 
                  <a href="">
                    <button className='buy-button'>Purchase</button>
                  </a>
                </div>
              </section>

              <a href='' style={{ textDecoration: 'none'}}>
                <section className='showcase-container' ref={mechanicTabletRef}>
                  <div className='mechanic-tablet'>
                    <h1>Mechanic Tablet</h1>
                    <h3>Most Unique And Advanced Mechanic Tablet</h3>
                    <div className='supported-frameworks'><p>ESX</p></div>
                    <button className='showcase-button' id="showcase-buy-button" style={{ cursor: 'pointer' }}>Purchase</button>
                    <button className='showcase-button' id="showcase-showcase-button" style={{ cursor: 'pointer' }}>Showcase</button>
                  </div>
                </section>
              </a>

              {/* <a href='' style={{ textDecoration: 'none'}}>
                <section className='showcase-container' ref={policeTabletRef}>
                  <div className='police-tablet'>
                    <h1>FiveM Script</h1>
                    <h3>An Advanced FiveM Coded FiveM Script</h3>
                    <div className='supported-frameworks' style={{ marginLeft: '130px'}}><p>ESX</p></div>
                    <button className='showcase-button' id="showcase-buy-button" style={{ cursor: 'pointer' }}>Purchase</button>
                    <button className='showcase-button' id="showcase-showcase-button" style={{ cursor: 'pointer' }}>Showcase</button>
                  </div>
                </section>
              </a>  */}

              <section className='reviews-container'>
                <h1>Reviews</h1>
                <p>Our average rating is "STARS"</p>
              </section>

              <footer className='footer-container'>
                <div className='copyright'>
                  <img className="footer-logoImg" src={logoIcon} alt="Logo" />
                  <span>Copyright © 2025 - Taxzyyy Scripts All, rights reserved.</span>
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