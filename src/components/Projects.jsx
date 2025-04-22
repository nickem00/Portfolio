import React from "react";
import './styles/Projects.css';

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-content">
                <h2>My Projects</h2>
                <div className="project-cards">
                    <div className="project-card">Project 1</div>
                    <div className="project-card">Project 2</div>
                    <div className="project-card">Project 3</div>
                </div>
            </div>
        </section>
    )
}

export default Projects;