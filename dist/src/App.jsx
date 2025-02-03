import { useState } from 'react'
import logoIcon from '/assets/logoIcon.png' 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'

function App() {
  return (
    <>
      <div>
        <header className="header-container">
          <nav className="navbar-container" id="navbar-container">
            <img className="logoImg" src={logoIcon} alt="Logo" />

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
          </nav>
        </header>  
      </div>
    </>
  )
}

export default App
