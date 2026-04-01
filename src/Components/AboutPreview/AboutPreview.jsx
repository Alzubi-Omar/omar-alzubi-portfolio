import React from "react";
import { Link } from "react-router-dom";
import "./AboutPreview.css";
import profileImg from "@/assets/images/profile_img.png";

const AboutPreview = () => {
  return (
    <section id="about" className="about-preview">
      <div className="about-preview__inner">
        <h2 className="about-preview__title">About</h2>

        <div className="about-preview__grid">
          <div className="about-preview__image">
            <img
              src={profileImg}
              alt="Omar AlzuBi — React Front-End Developer"
            />
          </div>

          <div className="about-preview__content">
            <h3 className="about-preview__headline">
              Product-minded engineering with clean, scalable UI
            </h3>

            <p className="about-preview__text">
              My curiosity for how software works started early and grew into
              formal study in Software Engineering, plus an MBA in Project
              Management &amp; MIS. Today I focus on building responsive,
              scalable web experiences with modern JavaScript and React—designed
              with clarity, performance, and real-world impact in mind.
            </p>

            <Link className="about-preview__link" to="/about">
              Read full bio &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
