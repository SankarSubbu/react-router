import React from 'react';
import Card from './Card'; /* Assuming the Card component is in a file named Card.js */

const CardsContainer = () => {
  const cardData = [
    { image: '"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",', title: 'Top Ways to Asses Soft Skills in Full Stack Developers in 2024 ', text: "When you're hiring a full-stack developer, what are the most important things you look for?" },
    { image: 'image2.jpg', title: 'Card 2', text: 'Description for card 2' },
    { image: 'image3.jpg', title: 'Card 3', text: 'Description for card 3' },
  ];

  return (
    <div className="card-container">
      <div className="card-row">
        {cardData.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
