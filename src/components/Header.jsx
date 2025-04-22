import React from "react";
import './styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">Nicholas Malm</div>
                <nav className="nav-links">
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;