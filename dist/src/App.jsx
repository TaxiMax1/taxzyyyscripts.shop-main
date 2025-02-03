import { useState } from 'react'
import logoIcon from './assets/logoIcon.png' 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'

function App() {
  return (
    <>
      <div>
        <header className="header-container">
          <nav className="navbar-container" id="navbar-container">
            <h3>
              <a href="https://shop.taxzyyyscripts.xyz">
                <img className="logoImg" src={logoIcon} alt="Logo" />
              </a>
            </h3>

            <h3>
              <a href="">Store</a>
            </h3>
            <h3>
              <a href="">
                Products <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </h3>
            <h3>
              <a href="https://docs.taxzyyyscripts.xyz">Docs</a>
            </h3>
            
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

        <section className='scripts-conatiner'>
            <div className='preview-script'>
              <p>Mechanic Tablet</p>
              <a href="">
                <button className='buy-button'>Purchase</button>
              </a>
            </div>
        </section>

        <a href='https://shop.taxzyyyscripts.xyz/mechanictablet' style={{ textDecoration: 'none'}}>
          <section className='showcase-container'>
            <div className='mechanic-tablet'>
              <h1>Mechanic Tablet</h1>
              <h3>Most Unique And Advaned Mechanic Tablet</h3>

              <div className='supported-frameworks'>
                  <p>ESX</p>
              </div>
            </div>
          </section>
        </a>

        <a href='' style={{ textDecoration: 'none'}}>
          <section className='showcase-container'>
            <div className='police-tablet'>
                <h1>Politi Tablet</h1>
                <h3>A Advanced FiveM Coded Police Tablet</h3>

                <div className='supported-frameworks' style={{ marginLeft: '130px'}}>
                    <p>ESX</p>
                </div>
              </div>
          </section>
        </a>
      </div>
    </>
  )
}

export default App
