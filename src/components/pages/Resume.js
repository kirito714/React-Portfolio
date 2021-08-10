import React from "react";

import "./styles.css";
import googleDrive from "./Images/googledrive.svg";

const Resume = () => {
  return (
    <div className="container1">
      <div className="bGround flex-container">
        <h1 className="bGround , hTitle flex-container">GoogleDrive</h1>
      </div>
      <div className="bGround divBG">
        <div className="bGround flex-container">
          <div className="devIcon ">
            <img className="devIcon" src={googleDrive} alt="Logo" />

            <a
              className="projectCard"
              href="https://docs.google.com/document/d/1rVuCgf5F-7ZwIur0HFmTtmSuaKAXPBschw1C1CDRT44/edit?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
