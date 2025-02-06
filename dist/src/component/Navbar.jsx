import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import logoIcon from '../assets/logoIcon.png';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
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
        <header className="header-container">
            <nav className="navbar-container">
                <h3>
                    <Link to="/">
                        <img className="logoImg" src={logoIcon} alt="Logo" />
                    </Link>
                </h3>
                <h3><Link to="/store">Store</Link></h3>

                <h3 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    Products <FontAwesomeIcon icon={faChevronDown} />
                    <div 
                        className={`products-container ${showProducts ? 'show' : ''}`} 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="products-items">
                            <Link to='/mechanictablet'>
                                <div className='products-item'>
                                    <div className='products-title'>Mechanic Tablet</div>
                                    <div className='products-description'>
                                        An advanced FiveM Mechanic tablet designed to streamline vehicle repairs, upgrades, and diagnostics.
                                    </div>
                                </div>
                            </Link>

                            <Link to='/websites'>
                                <div className='products-item'>
                                    <div className='products-title'>Websites</div>
                                    <div className='products-description'>
                                        Custom-built websites tailored for various needs like FiveM servers, webshops, and portfolios.
                                    </div>
                                </div>
                            </Link>
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
    );
}

export default Navbar;