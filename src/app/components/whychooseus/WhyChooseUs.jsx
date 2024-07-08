"use client";
import "./chooseus.css";

import React from "react";

import FeatureImg1 from "/public/feature-img1.png";
import FeatureImg2 from "/public/feature-img2.png";
import FeatureImg3 from "/public/feature-img3.webp";
import FeatureImg4 from "/public/feature-img4.webp";
import FeatureImg5 from "/public/feature-img5.webp";
import FeatureImg6 from "/public/feature-img6.webp";

import ShortCard from "../cardComponent/ShortCard";

const WhyChooseUs = () => {
  const FeaturesData = [
    {
      title: "Advanced Proven Procedures",
      description:
        "Thin needles target muscle knots, easing pain and boosting recovery.",
      url: FeatureImg1,
    },
    {
      title: "Most Effective Treatment",
      description:
        "Modern PT packs a punch! Needle knots goodbye with Dry Needling, learn to manage pain with Biofeedback, and explore other cutting-edge tools.",
      url: FeatureImg2,
    },
    {
      title: "With a Touch of Kindness",
      description:
        "Experience compassionate care on your healing journey. Our skilled team provides personalized physiotherapy, prioritizing your well-being.",
      url: FeatureImg3,
    },
    {
      title: "Friendly Atmosphere",
      description:
        "Our Physiotherapy Clinic Offers a Welcoming Environment, Skilled Therapists, and Personalized Care for Your Optimal Well-being",
      url: FeatureImg4,
    },
    {
      title: "Certified Therapist",
      description:
        " Experience Optimal Healing with Our Accredited Physiotherapists. Trust in Expertise, Personalized Care, and a Commitment to Your Well-being.",
      url: FeatureImg5,
    },
    {
      title: "Individual Approach",
      description:
        "Our Physiotherapy Services Tailor Solutions to Your Unique Needs. Personalized Care for Your Optimal Well-being and Recovery.",
      url: FeatureImg6,
    },
  ];
  return (
    <div id="choose-us" className="choose-container">
      <h1 className="choose-primary">Why Choose US</h1>
      <p className="choose-description mb-7">
        Choose us for top-notch physiotherapy. Our skilled team delivers
        personalized care with modern techniques, prioritizing your well-being.
        Regain mobility and alleviate pain with our dedicated approach to your
        health and recovery.
      </p>
      <div className="choose-card-container">
        {FeaturesData.map((feature, index) => {
          return (
            <div key={index}>
              <ShortCard feature={feature} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
