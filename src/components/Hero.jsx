import React from "react";
import './styles/Hero.css';
import heroBackground from '../assets/images/hero-background.png';

function Hero() {
    return (
        <section className="hero" id="home" style={{ backgroundImage: `url(${heroBackground})` }}>
            <div className="hero-content">
                <h1>Hej, jag är Nicholas Malm</h1>
                <p>Jag är en passionerad systemutvecklare som älskar att skapa moderna webblösningar och lösa problem med kod.</p>
                <a href="#projects" className="hero-button">Se mina projekt</a>
            </div>
        </section>
    )
}

export default Hero;