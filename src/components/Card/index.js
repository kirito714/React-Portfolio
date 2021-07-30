import React from "react";

import "./index.css";

const Card = ({ currentPage }) => {
  return (
    <div className="cardContainer">
      <div className="mainCard">
          {currentPage}
      </div>
    </div>
  );
};

export default Card;
