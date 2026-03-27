import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Projects.css";
import { projectsData } from "@/assets/data/projectsData/projectsData";
import ProjectCard from "@/Components/ProjectCard/ProjectCard";

const Projects = () => {
  const navigate = useNavigate();

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
  const mainProject = featuredProjects[0];
  const secondaryProjects = featuredProjects.slice(1);

  const handleDetailsClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="projects-container">
      <div className="projects-section">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <Link to="/projects" className="projects-viewall">
            View all
          </Link>
        </div>

        {featuredProjects.length > 0 ? (
          <>
            {mainProject && (
              <div className="projects-main">
                <ProjectCard
                  project={mainProject}
                  showDetailsButton
                  showLiveLink
                  onDetailsClick={handleDetailsClick}
                  className="project-card-main"
                />
              </div>
            )}

            <div className="projects-secondary">
              {secondaryProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  showDetailsButton
                  showLiveLink
                  onDetailsClick={handleDetailsClick}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="no-projects-message">No featured projects yet.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
