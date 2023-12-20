import React from "react";
const CardFull= [
  {image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
 title:'Top Ways to Asses Soft Skills in Full Stack Developers in 2024 ',
 text: "When you're hiring a full-stack developer, what are the most important things you look for?"
 },
 {image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
 title:'Top Differences: Full Stack Developer vs Software Engineer 2024',
 text: "Creating your first UI UX design portfolio is a monumental step in your design career"
 },
 {image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
 title:'Horizontal vs Vertical Scaling for Efficient System Design',
 text: "In the world, envision a digital skyscraper - a multifaceted structure built."
 }
 ]

function FullStackDevelopment  ()  {
  return (
    <div className="card-conatiner">
      <div className="card-row">
        {CardFull.map((card) => {
          <card key={card.title} {...card} />;
        })}
      </div>
    </div>
  );
};

export default FullStackDevelopment;
