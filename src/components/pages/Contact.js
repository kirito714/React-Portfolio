import React from "react";

import "./styles.css";
import linkedIn from "./Images/linkedin.svg";
import github from "./Images/github.svg";
import gmail from "./Images/gmail.svg";

const Contact = () => {
  return (
    <div className="container1">
      <div className="bGround flex-container">
        <h1 className="bGround , hTitle flex-container">Contact</h1>
      </div>
      <div className="bGround divBG">
        <div className="bGround flex-container">
          <div className="devIcon ">
            <img className="devIcon" src={linkedIn} alt="Logo" />

            <a
              class="projectCard"
              href="https://www.linkedin.com/in/joseph-amador-a37207157/"
              target="_blank" rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </div>
          <div className="devIcon">
            <img className="devIcon" src={github} alt="Logo" />

            <a
              class="projectCard"
              href="https://github.com/kirito714"
              target="_blank" rel="noreferrer noopener"
            >
              My Github
            </a>
            {/* <NavBar/> */}
          </div>
          <div className="devIcon">
            <img className="devIcon" src={gmail} alt="Logo" />

            <a
              class="projectCard"
              href="https://mail.google.com/mail"
              target="_blank" rel="noreferrer noopener"
            >
              kirito.1986.714@gmail.com
            </a>
            {/* <NavBar/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
