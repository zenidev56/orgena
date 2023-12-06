"use client";

import "./hero.css";

import React from "react";

import HeroImage from "/public/Content.jpg";
import Image from "next/image";

("use-client");

const Hero = () => {
  return (
    <div>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Providing Exceptional Physiotherapy and Care for All
            </h1>
            <p className="hero-description">
              At our clinic, we offer personalized and effective physiotherapy
              and chiropractic services to help you achieve optimal health and
              wellness.
            </p>
            <div className="hero-action-btn">
              <a href="#" className="btn btn--fill margin-right-btn">
                Get Help
              </a>
              <a href="#" className="btn btn--outline margin-right-btn">
                Learn more &darr;
              </a>
            </div>
          </div>
          <div className="hero-img-box">
            <Image
              src={HeroImage}
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              className="hero-img"
            />
          </div>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-1.jpg"
                alt="Customer photo"
              />
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-2.jpg"
                alt="Customer photo"
              />
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-3.jpg"
                alt="Customer photo"
              />
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-4.jpg"
                alt="Customer photo"
              />
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-5.jpg"
                alt="Customer photo"
              />
              <img
                src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-6.jpg"
                alt="Customer photo"
              />
            </div>
            <p className="delivered-text">
              <span>1000+</span>patients treated from last 3 years!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
