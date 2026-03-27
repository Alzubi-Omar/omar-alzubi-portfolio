import React, { useMemo, useState } from "react";
import "./ProjectsPage.css";
import { projectsData } from "@/assets/data/projectsData/projectsData";
import { useNavigate } from "react-router-dom";
import ProjectCard from "@/Components/ProjectCard/ProjectCard";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("all");

  const featured = useMemo(() => projectsData.filter((p) => p.featured), []);

  const experiments = useMemo(
    () => projectsData.filter((p) => p.category === "experiment"),
    [],
  );

  const handleDetailsClick = (id) => navigate(`/projects/${id}`);

  const visibleFeatured = view === "experiments" ? [] : featured;
  const visibleExperiments = view === "featured" ? [] : experiments;

  return (
    <div className="projects-page-wrapper">
      <main className="projects-page-container">
        <header className="projects-page-header">
          <h1 className="projects-page-title">Projects</h1>
          <p className="projects-page-subtitle">
            Featured case studies first, then smaller experiments.
          </p>

          <div className="projects-page-filters" aria-label="Filter projects">
            {["all", "featured", "experiments"].map((option) => (
              <button
                key={option}
                type="button"
                className={`filter-chip ${view === option ? "active" : ""}`}
                onClick={() => setView(option)}
                aria-pressed={view === option}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </header>

        {visibleFeatured.length > 0 && (
          <section className="projects-page-section">
            <div className="projects-page-section-head">
              <h2 className="projects-page-section-title">Featured</h2>
              <p className="projects-page-section-subtitle">
                Strongest work — deeper builds and best UX.
              </p>
            </div>
            <div className="projects-page-grid">
              {visibleFeatured.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  showDetailsButton
                  showLiveLink
                  onDetailsClick={handleDetailsClick}
                />
              ))}
            </div>
          </section>
        )}

        {visibleExperiments.length > 0 && (
          <section className="projects-page-section">
            <div className="projects-page-section-head">
              <h2 className="projects-page-section-title">Experiments</h2>
              <p className="projects-page-section-subtitle">
                Smaller builds, games, and quick ideas.
              </p>
            </div>
            <div className="projects-page-grid">
              {visibleExperiments.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  showDetailsButton
                  showLiveLink
                  onDetailsClick={handleDetailsClick}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProjectsPage;
