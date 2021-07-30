import React from "react";

import "./styles.css";
import devIcon from "./Images/Icon3.svg";
import github from "./Images/github.svg";

const Projects = () => {
  return (
    <div className="container1">
      <div className="bGround flex-container">
        <h1 className="bGround , hTitle flex-container">My Projects</h1>
      </div>
      <div className="bGround divBG">
        <div className="bGround flex-container">
          <div className="devIcon ">
            <img className="devIcon" src={devIcon} alt="Logo" />
            <h1>Team Project</h1>
            <div class="projectCard">
              This was my first real project with a team, I learned to code yes,
              but learning to work as a team on the same project was probably
              more of a learning curve than actually coding. Another Reason why
              coding is Awesome.
            </div>
            <a
              class="projectCard"
              href="https://super-roster.herokuapp.com/login"
              target="_blank "
              rel="noreferrer noopener"
            >
              Heroku: Super Roster
            </a>
          </div>
          <div className="devIcon">
            <img className="devIcon" src={github} alt="Logo" />

            <a
              class="projectCard"
              href="https://github.com/kirito714"
              target="_blank"
              rel="noreferrer noopener"
            >
              My Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
