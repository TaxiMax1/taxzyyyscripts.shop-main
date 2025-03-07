import { useState, useRef } from 'react';
import CountUp from './CountUp';
import logoIcon from '../assets/logoIcon.png';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BossMenu() {
  const [showProducts, setShowProducts] = useState(false);
  const dropdownTimeout = useRef(null);

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
    <div>
      <header className={`header-container`}>
        <nav className="navbar-container">
          <h3>
            <a href="http://localhost:5173">
              <img className="logoImg" src={logoIcon} alt="Logo" />
            </a>
          </h3>
          <h3><a href="">Store</a></h3>
                  
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
              <a href="/mechanictablet">
                <div className="products-item">
                  <div className="products-header">
                    <img className="products-logoImg" src={logoIcon} alt="Logo" />
                    <div className="products-title">Boss Menu</div>
                  </div>
                  <div className="products-description">
                    An advanced FiveM Mechanic tablet designed to streamline vehicle repairs, upgrades, and diagnostics.
                  </div>
                </div>
              </a>

              <a href="/txzFiveMWebsites">
                <div className="products-item">
                  <div className="products-header">
                    <img className="products-logoImg" src={logoIcon} alt="Logo" />
                    <div className="products-title">Websites</div>
                  </div>
                  <div className="products-description">
                    Custom-built websites tailored for various needs like FiveM servers, webshops, portfolios, and even more.
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

      <section className='script-description'>
        <h1>Boss Menu</h1>
        <h3>Most Unique And Advanced Boss Menu</h3>
        <div className='supported-frameworks-mechanic'><p>ESX</p></div>

        <div className="button-container">
          <a href='https://taxzyyyscripts.tebex.io/mechanictablet'>
            <button className='description-button' id="showcase-buy-button">Purchase</button>
          </a>

          <a href='https://docs.taxzyyyscripts.xyz/mechanictablet'>
            <button className='description-button' id="showcase-showcase-button">Documentation</button>
          </a>
        </div>
      </section>

      <section className='ad-container'>
        <div className='ad-items'>
          <div className='ad-item'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z"></path></svg>
            <div className='ad-description'>
              <b>Made with performance in mind</b> for your servers best experience.
            </div>
          </div>
    
          <div className='ad-item'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="160" r="128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M143.65 227.82L48 400l86.86-.42a16 16 0 0113.82 7.8L192 480l88.33-194.32"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M366.54 224L464 400l-86.86-.42a16 16 0 00-13.82 7.8L320 480l-64-140.8"></path><circle cx="256" cy="160" r="64" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle></svg>
            <div className='ad-description'>
              <b>Most used tablet</b> across all FiveM servers.
            </div>
          </div>

          <div className='ad-item'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"></path></svg>
            <div className='ad-description'>
            Made with <b>security in mind</b> to keep your players safe.
            </div>
          </div>

          <div className='ad-item'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"></path></svg>
            <div className='ad-description'>
              <b>Highly configurable</b> to match your server's needs.
            </div>
          </div>

        </div>
      </section>

      <section className='optimizing-container'>
        <div className='optimizing-title'>
          Seamless. <br></br>
          Enhanced efficiency.
        </div>
        <div className='section-divider'></div>
        <div className='optimizing-sub-title'>Idle</div>

        <div className='optimizing-timings'>
          <div className='optimizing-items' id="optimizing-blue">
            <div className='optimizing-value'>0.01ms</div>
            <div className='optimizing-label'>client load</div>
          </div>

          <div className='optimizing-items' id="optimizing-red">
            <div className='optimizing-value'>0.00ms</div>
            <div className='optimizing-label'>server load</div>
          </div>

          <div className='optimizing-items' id="optimizing-orange">
            <div className='optimizing-value'>1.57MIB</div>
            <div className='optimizing-label'>client memory</div>
          </div>
        </div>
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
  );
}

export default BossMenu;