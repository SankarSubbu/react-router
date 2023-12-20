import React from "react";
import { CardDS } from "./CardDS";

const DataScience = () => {
  return (
    <div className="card-conatiner">
      <div className="card-row">
        {CardDS.map((card) => {
          <card key={card.title} {...card} />;
        })}
      </div>
    </div>
  );
};

export default DataScience;
