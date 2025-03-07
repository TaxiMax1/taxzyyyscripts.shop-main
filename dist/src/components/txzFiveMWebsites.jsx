import { useState, useEffect, useRef } from 'react'; 
import logoIcon from '../assets/logoIcon.png';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function WebsitesShowcase() {  
  const [scrolled, setScrolled] = useState(false);
  const [activeTitle, setActiveTitle] = useState('Mechanic Tablet'); 
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
            setActiveTitle('Mechanic Tablet');
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

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  

    return (
      <div>
        <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
          <nav className="navbar-container">
            <h3>
              <a href="http://localhost:5173">
                <img className="logoImg" src={logoIcon} alt="Logo" />
              </a>
            </h3>
            <h3><a href="/">Store</a></h3>
                          
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

        <main style={{ userSelect: 'none' }}>
          <section className='introducing-container'>
            <h1>Do u need a <span>Website?</span></h1>
            <p>Contact me on discord.</p>
          </section>

          <section className='scroll-down-container'>
            <FontAwesomeIcon className='scroll-down-icon' icon={faChevronDown} onClick={handleScrollDown}  />
          </section>

          <section className='projects-container'>
            <h1 className='project-title'>Projects</h1>

            <div className='projects-grid'>
              <div className='project-card'>
                <h3 className='project-name'>Portfolio Website</h3>
                <p className='project-namedescription'>
                  Designed and developed a responsive personal portfolio website using HTML, CSS, and JavaScript.
                </p>
                <a href="https://github.com/TaxiMax1/Portfolio-Website" className='project-link'>View Project</a>
              </div>

              <div className='project-card'>
                <h3 className='project-name'>FiveM Documentation</h3>
                <p className='project-namedescription'>
                  A documentation website for FiveM resources, created using HTML, CSS, and JavaScript.
                </p>
                <a href="https://github.com/TaxiMax1/taxzyyyscripts.docs-main" className='project-link'>View Project</a>
              </div>
            </div>
          </section>

          {/* <section className='hireme-container'>  
            IN THE WORK!
          </section> */}
        </main>

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
    );
  }
  
export default WebsitesShowcase;