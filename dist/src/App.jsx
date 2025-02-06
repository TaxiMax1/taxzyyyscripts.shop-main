import { useState, useEffect, useRef } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import logoIcon from './assets/logoIcon.png';
import MechanicTablet from './component/mechanictablet';
import Websites from './component/Websites';
import './App.css';

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [activeTitle, setActiveTitle] = useState('Mechanic Tablet');
    
    const mechanicTabletRef = useRef(null);
    const websitesRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === mechanicTabletRef.current) {
                        setActiveTitle('Mechanic Tablet');
                    } else if (entry.target === websitesRef.current) {
                        setActiveTitle('Websites');
                    }
                }
            });
        }, { threshold: 0.5 });

        if (mechanicTabletRef.current) observer.observe(mechanicTabletRef.current);
        if (websitesRef.current) observer.observe(websitesRef.current);

        return () => {
            if (mechanicTabletRef.current) observer.unobserve(mechanicTabletRef.current);
            if (websitesRef.current) observer.unobserve(websitesRef.current);
        };
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
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
                                    <button className='showcase-button'>Purchase</button>
                                </div>
                            </section>
                        </a>

                        <a href='/websites' style={{ textDecoration: 'none'}}>
                            <section className='showcase-container' ref={websitesRef}>
                                <div className='police-tablet'>
                                    <h1>Websites</h1>
                                    <button className='showcase-button'>Purchase</button>
                                </div>
                            </section>
                        </a> 

                        <footer className='footer-container'>
                            <div className='copyright'>
                                <img className="footer-logoImg" src={logoIcon} alt="Logo" />
                                <span>Copyright © 2025 - Taxzyyy Scripts, All rights reserved.</span>
                            </div>
                        </footer>
                    </>
                } />
                
                <Route path="/mechanictablet" element={<MechanicTablet />} />
                <Route path="/websites" element={<Websites />} />
            </Routes>
        </Router>
    );
}

export default App;