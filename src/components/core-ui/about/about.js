import { Container } from "@mui/material";
import React, { useContext } from "react";
import codings from "../../../assets/lottie/coding.json";
import stars from "../../../assets/lottie/stars.json";
import circle from "../../../assets/lottie/circle.json";
import { ThemeContext } from "../../../contexts/theme-context";
import { aboutData } from "../../../data/aboutData";
import AnimationLottie from "../../helper/animation-lottie";
import "./about.css";

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Container className="about" id="about">
        <div className="line-styling">
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}></div>
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}></div>
          <div
            className="style-line"
            style={{ backgroundColor: theme.primary }}></div>
        </div>
        <div
          className="landing--animation-overlay"
          style={{
            position: "absolute",
            top: 100,
            right: 1300,
            width: "20%",
            height: "10%",
          }}>
          <AnimationLottie animationPath={stars} />
        </div>
        <div
          className="landing--animation-overlay"
          style={{
            position: "absolute",
            top: 100,
            right: 100,
            width: "20%",
            height: "10%",
          }}>
          <AnimationLottie animationPath={circle} />
        </div>
        <div className="about-body">
          <div className="about-description">
            <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
            <p style={{ color: theme.tertiary }}>
              {aboutData.description1}
              <br />
              <br />
              {aboutData.description2}
            </p>
          </div>
          <div className="about-animation">
            <AnimationLottie animationPath={codings} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
