import React from "react";
import './styles/Hero.css';
import heroBackground from '../assets/images/hero-background.png';

function Hero() {
    return (
        <section className="hero" id="home" style={{ backgroundImage: `url(${heroBackground})` }}>
            <div className="hero-content">
                <h1>Hi, I'm Nicholas Malm</h1>
                <p>I'm a computer science student.</p>
                <a href="#projects" className="hero-button">See my projects</a>
            </div>
        </section>
    )
}

export default Hero;