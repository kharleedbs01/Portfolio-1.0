import React from "react";
import "./Khaleed.css";
import KhaleedNavbar from "../components/khaleed/KhaleedNavbar";

// List of projects to display in the portfolio
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my projects, skills, and experience.",
    link: "https://github.com/kharleedbs01/Portfolio-1.0",
  },
  {
    title: "Project 2",
    description: "Description of my second project, highlighting its features and functionality.",
    link: "https://github.com/kharleedbs01/project2",
  },
  {
    title: "Project 3",
    description: "Another project that demonstrates my skills and coding style.",
    link: "https://github.com/kharleedbs01/project3",
  },
];

const Khaleed = () => {
  return (
    <>
      <KhaleedNavbar />
    <div className="portfolio-container">
      <h1 className="portfolio-title">My Portfolio</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Khaleed;
