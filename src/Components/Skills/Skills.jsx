import React from "react";
import "./Skills.css";
import { skillGroups } from "@/assets/data/skillsData/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="skills__title">Technical Skills</h2>

        {skillGroups.map((group) => (
          <div key={group.title} className="skills__group">
            <h3 className="skills__group-title">{group.title}</h3>

            <div className="skills__grid">
              {group.skills.map((skill) => (
                <span key={skill} className="skills__chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
