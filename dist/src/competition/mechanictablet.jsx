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
          </section>
    </div>
  );
}

export default MechanicTablet;