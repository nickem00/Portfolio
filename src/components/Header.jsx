import React, { useState, useEffect } from "react";
import './styles/Header.css';

function Header() {
    const [activeSection, setActiveSection] = useState('home');

    // Funktion för att uppdatera aktiv sektion baserat på scrollposition
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'about', 'contact'];
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header">
            <div className="header-content">
                <a href="#home" className="logo">Nicholas Malm</a>
                <nav className="nav-links">
                    <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
                    <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
                    <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;