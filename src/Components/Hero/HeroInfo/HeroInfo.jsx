import React from "react";
import PropTypes from "prop-types";
import "./HeroInfo.css";

const HeroInfo = ({ isHovered = false }) => {
  return (
    <div className="hero-info-container">
      <p className="hero-kicker">Hi, I'm</p>

      <h1 className="hero-info">
        <span className={`name ${isHovered ? "hovered" : ""}`}>Omar</span>
        <span className="hero-title">
          React Front-End Developer{" "}
          <span className="hero-title-muted">· APIs &amp; Node</span>
        </span>
      </h1>

      <div className={`hero-p ${isHovered ? "hovered" : ""}`}>
        <p>
          I build clean, scalable React interfaces with strong component
          architecture, responsive UI, and real-world API integration.
        </p>
        <p className="hero-subline">
          Product-minded from business &amp; management experience · Always
          building something new · Travel adventurer ✈️
        </p>
      </div>
    </div>
  );
};

HeroInfo.propTypes = {
  isHovered: PropTypes.bool,
};

export default HeroInfo;
