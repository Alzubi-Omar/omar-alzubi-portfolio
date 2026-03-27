import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "@/assets/data/projectsData/projectsData";
import "./ProjectDetails.css";
import NotFound from "@/Components/NotFound/NotFound";
import ProjectCard from "@/Components/ProjectCard/ProjectCard";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) return <NotFound />;

  return (
    <section className="project-details-container">
      <button
        type="button"
        className="project-back-button"
        onClick={() => navigate(-1)}
      >
        &larr; Back
      </button>

      <ProjectCard
        project={project}
        showDetailsButton={false}
        showLiveLink={true}
        showStack={false}
        className="project-card--details"
      />

      <div className="project-extended-description">
        <div className="project-overview">
          <div className="project-overview-item">
            <h3>Project Type</h3>
            <p>{project.type || "Not specified"}</p>
          </div>

          <div className="project-overview-item">
            <h3>Tech Stack</h3>
            {project.stack?.length ? (
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-chip">
                    {tech}
                  </span>
                ))}
              </div>
            ) : (
              <p>Stack information not available</p>
            )}
          </div>
        </div>

        <div className="project-details-section">
          <h3>Overview</h3>
          <p>{project.description || "Description not available yet."}</p>
        </div>

        <div className="project-details-section">
          <h3>Implementation</h3>
          <p>
            {project.extendedDescription ||
              "Additional technical details will be added soon."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
