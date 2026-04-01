import React from "react";
import "./HeroActions.css";

const HeroActions = () => {
  return (
    <div className="hero-action">
      <a href="#projects" className="hero-btn hero-btn--primary">
        View Projects
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-btn hero-btn--secondary"
      >
        Download Resume
      </a>

      <div className="hero-email">
        <span className="hero-email__label">Prefer email?</span>
        <a href="mailto:omaralzubi.dev@gmail.com" className="hero-email__link">
          omaralzubi.dev@gmail.com
        </a>
      </div>
    </div>
  );
};

export default HeroActions;
