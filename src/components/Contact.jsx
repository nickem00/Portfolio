import React from "react";
import './styles/Contact.css';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-content">
                <h2>Contact</h2>
                <p>Would you like to get in touch with me? Feel free to send an email!</p>
                <a href="mailto:youremail@example.com" className="contact-button">Send Email</a>
            </div>
        </section>
    );
}

export default Contact;
