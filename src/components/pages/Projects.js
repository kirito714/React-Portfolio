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
            <h1>Project "Super Roster"</h1>
            <div className="projectCard">
              This was my first real project with a team, I learned to code yes,
              but learning to work as a team on the same project was probably
              more of a learning curve than actually coding. Another Reason why
              coding is Awesome.
            </div>
            <a
              className="projectCard"
              href="https://super-roster.herokuapp.com/login"
              target="_blank "
              rel="noreferrer noopener"
            >
              Deployed: Heroku
            </a>
          </div>
          <div className="devIcon ">
            <img className="devIcon" src={devIcon} alt="Logo" />
            <h1>Project "Events Near You"</h1>
            <div className="projectCard">
              My Final Project "Events Near you". i worked on this project with,
              three other Awesome classmates. We worked through many challenges
              and plan on working on future developments that we could not
              implement due to time constraints.
            </div>
            <a
              className="projectCard"
              href="https://aqueous-peak-04279.herokuapp.com/"
              target="_blank "
              rel="noreferrer noopener"
            >
              Deployed: Heroku
            </a>
          </div>
          <div className="devIcon">
            <img className="devIcon" src={github} alt="Logo" />

            <a
              className="projectCard"
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
