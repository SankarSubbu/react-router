import React from 'react';

const Card = ({ image, title, text }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
