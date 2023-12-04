import "./services.css";

import React from "react";

import ServiceImg1 from "/public/img2.jpg";

import Card from "../card/Card";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-heading">
        <h1 className="service-primary">Conditions we treat</h1>
        <p className="service-description">
          We provide comprehensive physiotherapy and chiropractic services for
          men and women.
        </p>
      </div>
      <div className="services-cards">
        <Card
          title="Joint Pain"
          description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop..."
          image={ServiceImg1}
        />
        <Card
          title="Joint Pain"
          description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop..."
          image={ServiceImg1}
        />
        <Card
          title="Joint Pain"
          description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop..."
          image={ServiceImg1}
        />
      </div>
    </div>
  );
};

export default Services;
