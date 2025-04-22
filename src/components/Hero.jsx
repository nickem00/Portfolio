import React from "react";
import './styles/Hero.css';
import heroBackground from '../assets/images/hero-background.png';

function Hero() {
    return (
        <section className="hero" id="home" style={{ backgroundImage: `url(${heroBackground})` }}>
            <div className="hero-content">
                <h1>Hej, jag är Nicholas Malm</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione ab magnam assumenda, esse, praesentium facere sequi neque tempora ut recusandae similique harum, qui at rerum consequatur nisi odit modi!</p>
            </div>
        </section>
    )
}

export default Hero;