import "./about.css";

import React from "react";

import AboutImg from "/public/about.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <Image src={AboutImg} alt="About img" />
      </div>
      <div className="about-info">
        <h1 className="about-title">About Us</h1>
        <h1 className="about-primary">
          Experience the best in Physiotherapy and Physical care.
        </h1>
        <p className="about-description">
          Our company is dedicated to providing top-quality health care services
          in physiotherapy and physical. With a team of experienced
          professionals, we strive to help our clients achieve optimal wellness
          and recovery.
        </p>
      </div>
    </div>
  );
};

export default About;
