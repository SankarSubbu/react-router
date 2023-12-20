import React from "react";
import { CardCyber } from "./CardCyber";

const Cybersecurity = () => {
  return (
    <div className="card-conatiner">
      <div className="card-row">
        {CardCyber.map((card) => {
          <card key={card.title} {...card} />;
        })}
      </div>
    </div>
  );
};

export default Cybersecurity;
