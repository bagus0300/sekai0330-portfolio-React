import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import Typed from "react-typed";
import { headerData } from "../../../data/headerData";
import "./landing.css";
import avatar from "../../../assets/png/my avatar.png";
import AnimationLottie from "../../helper/animation-lottie";
import landing_1 from "../../../assets/lottie/landing-1.json";
import landing_3 from "../../../assets/lottie/landing-3.json";

import { FaGithub, FaSkype, FaTelegram, FaDiscord } from "react-icons/fa";
import { contactsData } from "../../../data/contactsData";

function LandingUI({ theme, drawerOpen, classes }) {
  return (
    <div className="landing" style={{ backgroundColor: theme.quaternary }}>
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.quaternary }}>
          <div className="lcl--content">
            {contactsData.telegramLink && (
              <a
                href={contactsData.telegramLink}
                target="_blank"
                rel="noreferrer">
                <FaTelegram
                  className="landing--social"
                  style={{ color: theme.primary }}
                  aria-label="Telegram"
                />
              </a>
            )}
            <a
              href={contactsData.telegramLink}
              target="_blank"
              rel="noreferrer">
              <FaDiscord
                className="landing--social"
                style={{ color: theme.primary }}
                aria-label="Discord"
              />
            </a>

            {contactsData.skypeLink && (
              <a href={contactsData.skypeLink} target="_blank" rel="noreferrer">
                <FaSkype
                  className="landing--social"
                  style={{ color: theme.primary }}
                  aria-label="Skype"
                />
              </a>
            )}
            {contactsData.github && (
              <a href={contactsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.primary }}
                  aria-label="GitHub"
                />
              </a>
            )}
          </div>
        </div>
        <div
          className="landing--animation-overlay"
          style={{
            position: "absolute",
            top: "8%",
            left: "19%",
            width: "20%",
            height: "10%",
          }}>
          <AnimationLottie animationPath={landing_1} />
        </div>
        <div
          className="landing--animation-overlay"
          style={{
            position: "absolute",
            top: "29%",
            right: "8%",
            width: "20%",
            height: "10%",
          }}>
          <AnimationLottie animationPath={landing_3} />
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
