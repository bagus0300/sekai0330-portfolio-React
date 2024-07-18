import { Container } from "@mui/material";
import React, { useContext } from "react";
import service from "../../../assets/lottie/service.json";
import charts from "../../../assets/lottie/charts.json";
import ai from "../../../assets/lottie/ai.json";
import ec from "../../../assets/lottie/ec.json";
import { ThemeContext } from "../../../contexts/theme-context";
import { serviceData } from "../../../data/serviceData";
import AnimationLottie from "../../helper/animation-lottie";
import ServiceCard from "./service-card";
import "./service.css";

function Service() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Container className="experience" id="experience">
        <div className="experience-body">
          <div className="experience-description">
            <h1 style={{ color: theme.primary }}></h1>
            {serviceData.map((exp) => (
              <ServiceCard key={exp.id} id={exp.id} company={exp.company} />
            ))}
          </div>
          <div
            className="experience-image"
            style={{
              position: "absolute",
              top: 2450,
              left: 1200,
              width: "30%",
              height: "10%",
            }}>
            <AnimationLottie animationPath={charts} />
          </div>
          <div
            className="experience-image"
            style={{
              position: "absolute",
              top: 2850,
              right: 1500,
              width: "15%",
              height: "10%",
            }}>
            <AnimationLottie animationPath={ai} />
          </div>
          <div
            className="experience-image"
            style={{
              position: "absolute",
              top: 3150,
              left: 1100,
              width: "20%",
              height: "10%",
            }}>
            <AnimationLottie animationPath={ec} />
          </div>
          <div className="experience-image">
            <AnimationLottie animationPath={service} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Service;
