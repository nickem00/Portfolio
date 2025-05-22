import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faHome } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../components/styles/Photography.css';

export default function Photography() {
  return (
    <div className="photography-container">
      <h1 className="photography-title">Photography Portfolio</h1>
      <div className="photography-divider"></div>
      
      <div className="photography-message-container">
        <FontAwesomeIcon icon={faCamera} className="photography-icon" />
        <p className="photography-message">This page is coming soon! Check back later or view my instagram bellow.</p>
      </div>
      
      <div className="social-links-container">
        <a 
          href="https://www.instagram.com/nicholas_malm" 
          target="_blank" 
          rel="noopener noreferrer"
          className="button"
        >
          <FontAwesomeIcon icon={faInstagram} /> View my Instagram
        </a>
      </div>
        <Link to="/" className="button">
        <FontAwesomeIcon icon={faHome} /> Back to Home
      </Link>
    </div>
  );
}