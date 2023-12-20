import React from "react";
import Card from "./Card";

const All = () => {
  return (
    <div className="card-conatiner">
      <div className="card-row">
        {Card.map((card) => {
          <Card key={card.title} {...card} />;
        })}
      </div>
    </div>
  );
};

export default All;
