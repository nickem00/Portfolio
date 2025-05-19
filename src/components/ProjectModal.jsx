import React from "react";
import './styles/ProjectModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>x</button>
                <img src={project.image} alt={project.title} />
                <h2>{project.title}</h2>
                <p>{project.description}</p>                <p className="project-authors">
                    {project.authors && <strong>Authors:</strong>} {project.authors && project.authors.join(", ")}
                </p>
                {project.skills && project.skills.length > 0 && (
                    <div className="modal-skills">
                        <strong>Skills:</strong>
                        <div className="skills-container">
                            {project.skills.map((skill, index) => (
                                <span key={index} className="modal-skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                )}
                <div className="modal-links">
                    <a href={project.github} className="icon-button github" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    {project.demo && (
                        <a href={project.demo} className="view-button" target="_blank" rel="noopener noreferrer">
                            View
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectModal;