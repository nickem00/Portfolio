import React from "react";
import './styles/About.css';
import profPic1 from '../assets/images/prof-pic-1.png'

function About() {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    I'm a computer science student currently finishing my second year at Kristianstad University.
                    <br />
                    I have a passion for programming and technology, and I love learning new things.
                </p>
                <img className="profile-picture" src={profPic1} alt="Picture of me" />
            </div>
        </section>
    )
}

export default About;