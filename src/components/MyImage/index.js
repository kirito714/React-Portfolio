import React from "react";
import MyImage2 from './Images/MyImage2.png';
import indexCss from './index.module.css';


const MyImage = () => {
    return (
        <div className="mySelf">
            <img  src={MyImage2} alt="Logo"/>
            <h1 className={indexCss.stuffy}>Fuck</h1>
        </div>
    )
  }
  


  export default MyImage;