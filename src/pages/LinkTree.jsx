import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../components/styles/LinkTree.css";
import profPic from '../assets/images/prof-pic-1.png';

export default function LinkTree() {
    return (
        <div className="link-tree">
            <div className="link-tree-container">
                <div className="profile-section">
                    <img className="profile-image" src={profPic} alt="Nicholas Malm" />
                    <h1 className="profile-name">Nicholas Malm</h1>
                    <div className="link-tree-divider"></div>
                    <p className="profile-bio">Computer Science Student & Photography Enthusiast</p>
                </div>

                <div className="portfolio-links">
                    <Link to="/dev" className="portfolio-link">
                        <h3>Developer Portfolio</h3>
                        <p>Check out my coding projects and skills</p>
                    </Link>
                    
                    <Link to="/photo" className="portfolio-link">
                        <h3>Photography</h3>
                        <p>View my photography collection</p>
                    </Link>
                </div>

                <div className="social-links">
                    <a href="https://github.com/nickem00" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/nicholas-malm" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/nicholas_malm" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>

                <p className="footer-text">© {new Date().getFullYear()} Nicholas Malm. All rights reserved.</p>
            </div>
        </div>
    );
}