import React from "react";
import MyImage2 from "./Images/MyImage2.png";
import "./index.css"

const MyImage = () => {
  return (
    <div className="mySelf">
      <div>
      <img className="mePick" src={MyImage2} alt="Logo" />
      <h1 className="myName">Joseph Amador</h1>
      </div>
    </div>
  );
};

export default MyImage;
