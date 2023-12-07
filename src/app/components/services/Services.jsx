import "./services.css";

import React from "react";

import ServiceImg1 from "/public/img2.jpg";
import { Button } from "flowbite-react";

import CardComponent from "../cardComponent/CardComponent";

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
        <CardComponent
          title="Joint Pain"
          description=": The flu is a contagious respiratory illness
        caused by the influenza virus"
          image={ServiceImg1}
        />
        <CardComponent
          title="Joint Pain"
          description=": The flu is a contagious respiratory illness
        caused by the influenza virus"
          image={ServiceImg1}
        />
        <CardComponent
          title="Joint Pain"
          description=": The flu is a contagious respiratory illness
        caused by the influenza virus"
          image={ServiceImg1}
        />
      </div>
      <div className="flex justify-end my-5">
        <Button color="blue">View more</Button>
      </div>
    </div>
  );
};

export default Services;
