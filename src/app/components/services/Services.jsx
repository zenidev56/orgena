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
          title=" Frozen Shoulder: When Your Move Becomes Unfrozen"
          description="Frozen shoulder, a puzzling condition, locks your shoulder in a painful embrace of stiffness. Movement becomes limited, and everyday tasks like reaching behind or styling your hair feel like distant memories. While the exact cause remains a mystery, diabetes, injuries, and surgery can sometimes play a role in this unwelcome guest's arrival."
          image={ServiceImg1}
          condition="Frozen shoulder, also known as peri-arthritis or adhesive capsulitis, manifests as: Aching, searing pain, Restricted mobility and Limited range of motion"
          symptons={[
            "Pain: The dominant symptom, a constant ache that worsens with movement and haunts you at night.",
            "Stiffness: A feeling of immobility, like your shoulder joint is encased in cement.",
            "Reduced range of motion: Everyday tasks like raising your arm, reaching behind your back, or styling your hair become increasingly difficult.",
            "Muscle weakness: Over time, underused muscles surrounding the shoulder can weaken, further limiting your movement."
          ]}
        />
        <CardComponent
          title="Joint Pain"
          description=": The flu is a contagious respiratory illness
        caused by the influenza virus"
          image={ServiceImg1}
          condition="Frozen shoulder, also known as peri-arthritis or adhesive capsulitis, manifests as: Aching, searing pain, Restricted mobility and Limited range of motion"
          symptons={[
            "Pain: The dominant symptom, a constant ache that worsens with movement and haunts you at night.",
            "Stiffness: A feeling of immobility, like your shoulder joint is encased in cement.",
            "Reduced range of motion: Everyday tasks like raising your arm, reaching behind your back, or styling your hair become increasingly difficult.",
            "Muscle weakness: Over time, underused muscles surrounding the shoulder can weaken, further limiting your movement."
          ]}
        />
        <CardComponent
          title="Joint Pain"
          description=": The flu is a contagious respiratory illness
        caused by the influenza virus"
          image={ServiceImg1}
          condition="Frozen shoulder, also known as peri-arthritis or adhesive capsulitis, manifests as: Aching, searing pain, Restricted mobility and Limited range of motion"
          symptons={[
            "Pain: The dominant symptom, a constant ache that worsens with movement and haunts you at night.",
            "Stiffness: A feeling of immobility, like your shoulder joint is encased in cement.",
            "Reduced range of motion: Everyday tasks like raising your arm, reaching behind your back, or styling your hair become increasingly difficult.",
            "Muscle weakness: Over time, underused muscles surrounding the shoulder can weaken, further limiting your movement."
          ]}
        />
      </div>
      <div className="flex justify-end my-5">
        <Button color="blue">View more</Button>
      </div>
    </div>
  );
};

export default Services;
