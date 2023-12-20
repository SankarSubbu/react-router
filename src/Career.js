import React from "react";
import { CardCareer } from "./CardCareer";

const Career = () => {
  return (
    <div className="card-conatiner">
      <div className="card-row">
        {CardCareer.map((card) => {
          <card key={card.title} {...card} />;
        })}
      </div>
    </div>
  );
};

export default Career;
