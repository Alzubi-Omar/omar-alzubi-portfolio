import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-inner">
        <header className="about-header" aria-label="About Omar AlzuBi">
          <h1 className="about-title">
            Building thoughtful web experiences with clean, scalable frontend
            code
          </h1>
          <p className="about-intro">
            I'm Omar AlzuBi, a React-focused frontend developer with a
            background in Software Engineering, Project Management, and
            Management Information Systems. I enjoy turning ideas into
            responsive, user-friendly interfaces that are clear, maintainable,
            and built for real-world use. Currently seeking frontend and product
            roles where I can contribute to modern web products.
          </p>
        </header>

        <div className="about-section">
          <article className="about-section-item">
            <h2 className="about-section-item__title">My Journey</h2>
            <p className="about-section-item__content">
              My interest in technology started early and grew into formal study
              in Software Engineering, followed by an MBA focused on Project
              Management and MIS. That combination gave me both technical
              foundations and a broader product mindset.
            </p>
            <p className="about-section-item__content">
              Today, my focus is frontend development with JavaScript and React,
              while also maintaining working knowledge of backend fundamentals
              like Node.js, Express, and API integration.
            </p>
          </article>

          <article className="about-section-item">
            <h2 className="about-section-item__title">How I Build</h2>
            <p className="about-section-item__content">
              I care about structure as much as visuals. I like building
              interfaces with reusable components, clean layout systems,
              meaningful naming, and code that stays understandable as projects
              grow.
            </p>
            <p className="about-section-item__content">
              My goal is not just to make things work, but to make them easier
              to maintain, improve, and scale.
            </p>
          </article>

          <article className="about-section-item">
            <h2 className="about-section-item__title">What I Bring</h2>
            <ul className="about-section-item__list">
              <li>
                Strong foundation in modern JavaScript, React, and responsive UI
                development
              </li>
              <li>
                Product awareness shaped by business, management, and systems
                thinking
              </li>
              <li>Clear communication and a collaborative mindset</li>
              <li>
                A learning-first approach with real commitment to continuous
                improvement
              </li>
            </ul>
          </article>

          <article className="about-section-item">
            <h2 className="about-section-item__title">Beyond Code</h2>
            <p className="about-section-item__content">
              Outside of development, I'm passionate about creativity, travel,
              and documenting growth through content. That mix of technical and
              creative thinking shapes how I approach digital experiences.
            </p>
          </article>

          <article className="about-section-item about-section-item--full">
            <h2 className="about-section-item__title">Looking Ahead</h2>
            <p className="about-section-item__content">
              Right now I'm focused on frontend and product opportunities where
              I can work on real products, grow within a strong team, and apply
              both my technical and product thinking to meaningful problems.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
