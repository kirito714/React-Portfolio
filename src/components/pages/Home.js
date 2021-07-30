import React from "react";

import "./styles.css";
import devIcon from "./Images/Icon3.svg";
import devIcon1 from "./Images/Icon4.svg";
import devIcon2 from "./Images/Icon5.svg";
import devIcon3 from "./Images/Icon6.svg";
import devIcon4 from "./Images/Icon7.svg";

const Home = () => {
  return (
    <div className="container1">
      <div className="bGround flex-container">
        <h1 className="bGround , hTitle flex-container">
          Full Stack Software Engineer
        </h1>
      </div>
      <div className="bGround divBG">
        <div className="bGround flex-container">
          <div className="devIcon ">
            <img className="devIcon" src={devIcon} alt="Logo" />
            <h1>Front End</h1>
            <ul className="devIcon">
              <li>React</li>
              <li>Javascript</li>
              <li>JQuery</li>
            </ul>
          </div>
          <div className="devIcon">
            <img className="devIcon" src={devIcon2} alt="Logo" />
            <h1>Tools</h1>
            <ul className="devIcon">
              <li>VScode</li>
              <li>Git</li>
              <li>Github</li>
              <li>Insomnia</li>
            </ul>
          </div>
          <div className="devIcon">
            <img className="devIcon" src={devIcon1} alt="Logo" />
            <h1>Databases</h1>
            <ul className="devIcon">
              <li>MongoDB</li>
              <li>MySql</li>
            </ul>
          </div>
          <div className="devIcon">
            <img className="devIcon" src={devIcon3} alt="Logo" />
            <h1>Backend</h1>
            <ul className="devIcon">
              <li>Node</li>
              <li>Express</li>
              <li>GraphQl</li>
            </ul>
          </div>
          <div className="devIcon">
            <img className="devIcon" src={devIcon4} alt="Logo" />
            <h1>Servers</h1>
            <ul className="devIcon">
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
