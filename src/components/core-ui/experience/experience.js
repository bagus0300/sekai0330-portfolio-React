import { Container } from "@mui/material";
import React, { useContext } from "react";
import experience from "../../../assets/lottie/development.json";
import { ThemeContext } from "../../../contexts/theme-context";
import { experienceData } from "../../../data/experienceData";
import AnimationLottie from "../../helper/animation-lottie";
import ExperienceCard from "./experience-card";
import "./experience.css";
import landing_4 from "../../../assets/lottie/landing-4.json";

function Experience() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Container className="experience" id="experience">
        <div className="experience-body">
          <div
            className="experience-image"
            style={{ width: "100%", height: "100%" }}>
            <AnimationLottie animationPath={experience} />
          </div>
          <div className="experience-description">
            <div
              className="landing--animation-overlay"
              style={{
                position: "absolute",
                top: 1500,
                left: 1500,
                width: "20%",
                height: "10%",
              }}>
              <AnimationLottie animationPath={landing_4} />
            </div>

            <h1 style={{ color: theme.primary }}>Experience</h1>
            {experienceData.map((exp) => (
              <ExperienceCard
                key={exp.id}
                id={exp.id}
                jobtitle={exp.jobtitle}
                company={exp.company}
                startYear={exp.startYear}
                endYear={exp.endYear}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Experience;
