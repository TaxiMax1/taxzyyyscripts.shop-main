import React from 'react';
import logoIcon from '../assets/logoIcon.png';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MechanicTablet() {
  return (
    <div>
      <header className="header-container">
          <nav className="navbar-container">
              <h3>
                <a href="https://shop.taxzyyyscripts.xyz">
                  <img className="logoImg" src={logoIcon} alt="Logo" />
                </a>
              </h3>
          
              <h3><a href="#">Store</a></h3>
              <h3><a href="#">Products <FontAwesomeIcon icon={faChevronDown} /></a></h3>
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

          <section className='script-description'>
            <h1>Mechanic Tablet</h1>
            <h3>Most Unique And Advanced Mechanic Tablet</h3>
            <div className='supported-frameworks-mechanic'><p>ESX</p></div>

            <div className="button-container">
              <button className='description-button' id="showcase-buy-button">Purchase</button>
              <button className='description-button' id="showcase-showcase-button">Documentation</button>
            </div>
          </section>

          <section className='script-usedby'>
            <h1>Used by.</h1>

            <div className='usedby-container'>
              <div className='usedby-box'>
                <div className='usedby-value'>6.935</div>
                <div className='usedby-label'>Servers</div>
              </div>

              <div className='usedby-box'>
                <div className='usedby-value'>65.034</div>
                <div className='usedby-label'>Players</div>
              </div>
            </div>

            <h5>Updated last 24h</h5>
            <h4>Statics powered by <span>5Mertrics</span></h4>
          </section>
    </div>
  );
}

export default MechanicTablet;