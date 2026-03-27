import React from "react";
import "./ProjectCard.css";
import PropTypes from "prop-types";
import placeholder from "@/assets/images/placeholder.png";

const ProjectCard = ({
  project,
  showDetailsButton,
  showLiveLink,
  onDetailsClick,
  showStack = true,
  className = "",
}) => (
  <div className={`project-card ${className}`}>
    <img
      src={project.image || placeholder}
      alt={project.title}
      className="project-card-image"
      loading="lazy"
    />

    <div className="project-card-content">
      <h2 className="project-card-title">{project.title}</h2>
      <p className="project-card-description">{project.description}</p>

      {showStack &&
        Array.isArray(project.stack) &&
        project.stack.length > 0 && (
          <p className="project-card-stack">
            {project.stack.slice(0, 4).join(" • ")}
            {project.stack.length > 4 ? " • …" : ""}
          </p>
        )}
    </div>

    {/* Both <button> and <a> share .project-card-button intentionally —
        same visual style, different semantics based on context */}
    <div className="project-card-actions">
      {showDetailsButton && (
        <button
          type="button"
          className="project-card-button"
          onClick={() => onDetailsClick?.(project.id)}
        >
          Show Details
        </button>
      )}

      {showLiveLink && project.liveSiteUrl && (
        <a
          href={project.liveSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-button"
        >
          Live Site
        </a>
      )}
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    liveSiteUrl: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    featured: PropTypes.bool,
    category: PropTypes.oneOf(["featured", "experiment"]),
    type: PropTypes.string,
    extendedDescription: PropTypes.string,
  }).isRequired,

  showDetailsButton: PropTypes.bool,
  showLiveLink: PropTypes.bool,
  showStack: PropTypes.bool,
  onDetailsClick: PropTypes.func,
  className: PropTypes.string,
};

export default ProjectCard;
