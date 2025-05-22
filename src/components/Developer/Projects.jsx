import React, { useState } from "react";
import '../styles/Projects.css';
import ProjectModal from "./ProjectModal";

// Images
import solaceImage from '../../assets/images/solace-logo.png'
import chatterLogo from '../../assets/images/chatter-logo.png'
import moreComingLogo from '../../assets/images/more-coming.png'
import house18Screenshot from '../../assets/images/house18Screenshot.png'

const projectData = [
    {
        title: "House 18",
        description: "House 18 is a fullstack web application built as part of a university project during the " +
        "course Full Stack Development - DA219B at Kristianstad University. The app simulates a modern clothing " +
        "store with user authentication, a responsive shopping exprerience and admin product management. Feel free to read more at " +
        "the README on GitHub.",
        image: house18Screenshot,
        github: "https://github.com/nickem00/house-18",
        demo: "https://house-18.vercel.app/",
        authors: [
            "Nicholas Malm (Me)",
            "Hugo Nilsson",
            "Jacob Hellgren",
            "Pontus Havmyr"
        ],
        skills: ["React", "Vite", "Node.js", "Express", "MongoDB", "CSS"]
    },
    {
        title: "Solace",
        description: "Solace is a desktop application we developed during the Agile Development Methods course. " + 
        "Its purpose is to help users manage stress and anxiety by logging their mood and stress levels," +
        " which are visualized in a dashboard. The app is built with Python and Tkinter. It was a group project" +
        " following agile workflows from concept to final product.",
        image: solaceImage, // se till att lägga till rätt bild i public/assets
        github: "https://github.com/HugNil/Solace",
        demo: null,
        authors: [
            "Nicholas Malm",
            "Jacob Hellgren",
            "Hugo Nilsson",
            "Pontus Havmyr"
        ],
        skills: ["Python", "Tkinter", "MYSQL", "Agile"]
    },
    {
        title: "Course work Frontend",
        description: 
            "This is a front end assignment in the course Front End at Kristianstad University. " +
            "We learned how to fetch data from an API. There were also a lot of focus on semantic design and responsiveness. " +
            "Languages used were JavaScript, HTML and CSS.",
        image: chatterLogo,
        github: "https://github.com/nickem00/FrontEnd-Module2",
        demo: "https://front-end-module2.vercel.app/",
        authors: ["Nicholas Malm"],
        skills: ["JavaScript", "HTML", "CSS", "API", "Responsive Design"]
    },
    {
        title: "More comming..",
        description: "No more featured projects yet. Feel free to check out my GitHub in the mean time.",
        image: moreComingLogo,
        github: "https://github.com/nickem00/",
        demo: null,
        skills: []
    }
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="projects" id="projects">
            <div className="projects-content">
                <h2>My Projects</h2>                <div className="project-cards">
                    {projectData.map((project, index) => (
                        <div key={index} className="project-card" onClick={() => setSelectedProject(project)}>
                            <img className="project-image" src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)}/>
        </section>
    )
}

export default Projects;