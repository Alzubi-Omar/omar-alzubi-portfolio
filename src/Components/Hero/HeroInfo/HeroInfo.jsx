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
          Full-Stack Engineer{" "}
          <span className="hero-title-muted">· React &amp; Node.js</span>
        </span>
      </h1>

      <div className={`hero-p ${isHovered ? "hovered" : ""}`}>
        <p>
          I build full-stack applications with React, Node.js, and PostgreSQL —
          clean component architecture on the front end, secure and
          well-structured APIs on the back end.
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
