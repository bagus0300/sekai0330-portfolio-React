import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import Typed from "react-typed";
import { headerData } from "../../../data/headerData";
import "./landing.css";
import avatar from "../../../assets/png/my avatar.png";
import AnimationLottie from "../../helper/animation-lottie";
import landing_1 from "../../../assets/lottie/landing-1.json";
import landing_2 from "../../../assets/lottie/landing-2.json";
import landing_3 from "../../../assets/lottie/landing-3.json";
import small_stars from "../../../assets/lottie/small_stars.json";

import { FaGithub } from "react-icons/fa";
import { contactsData } from "../../../data/contactsData";

function LandingUI({ theme, drawerOpen, classes }) {
  return (
    <div className="landing" style={{ backgroundColor: theme.quaternary }}>
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.quaternary }}>
          <div className="lcl--content">
            {/* {contactsData.linkedIn && (
              <a href={contactsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social linkedin-icon"
                  style={{ color: theme.primary }}
                  aria-label="LinkedIn"
                />
              </a>
            )} */}
            {contactsData.github && (
              <a href={contactsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.primary }}
                  aria-label="GitHub"
                />
              </a>
            )}
            {/* {contactsData.twitter && (
              <a href={contactsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing--social twitter-icon"
                  style={{ color: theme.primary }}
                  aria-label="Twitter"
                />
              </a>
            )}
            {contactsData.facebook && (
              <a href={contactsData.facebook} target="_blank" rel="noreferrer">
                <FaFacebook
                  className="landing--social facebook-icon"
                  style={{ color: theme.primary }}
                  aria-label="facebook"
                />
              </a>
            )} */}
          </div>
        </div>
        <div
          className="landing--animation-overlay"
          style={{
            position: "absolute",
            top: 100,
            left: 300,
            width: "20%",
            height: "10%",
          }}>
          <AnimationLottie animationPath={landing_1} />
        </div>
        <div
          className="landing--animation-overlay"
          style={{
            position: "absolute",
            top: 100,
            left: 800,
            width: "20%",
            height: "10%",
          }}>
          <AnimationLottie animationPath={landing_2} />
        </div>
        <div
          className="landing--animation-overlay"
          style={{
            position: "absolute",
            top: 280,
            left: 1400,
            width: "20%",
            height: "10%",
          }}>
          <AnimationLottie animationPath={landing_3} />
        </div>
        <div
          className="landing--animation-overlay"
          style={{
            position: "absolute",
            top: 550,
            left: 480,
            width: "20%",
            height: "10%",
          }}>
          <AnimationLottie animationPath={small_stars} />
        </div>
        <img
          src={avatar}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.primary,
          }}
        />

        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}>
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            {/* <h6 style={{ color: theme.primary }}>{headerData.title}</h6> */}
            <h1>{headerData.name}</h1>
            <Typed
              strings={[
                "Frontend Developer",
                "Backend Developer",
                "AI developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              className="typed-header"
              style={{ color: theme.primary, fontSize: "20px" }}
              loop
            />
            <p>{headerData.desciption}</p>

            <div className="lcr-buttonContainer">
              {/* {resumePdf && (
                <a
                  href={resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={classes.resumeBtn}>Download CV</button>
                </a>
              )} */}
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <button className={classes.contactBtn}>Contact</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingUI;
