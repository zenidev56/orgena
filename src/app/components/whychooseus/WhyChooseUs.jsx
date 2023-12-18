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
        "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla mauris sit amet nibh.",
      url: FeatureImg3,
    },
    {
      title: "Friendly Atmosphere",
      description:
        "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla mauris sit amet nibh.",
      url: FeatureImg4,
    },
    {
      title: "Certified Therapist",
      description:
        "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla mauris sit amet nibh.",
      url: FeatureImg5,
    },
    {
      title: "Individual Approach",
      description:
        "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Sed fringilla mauris sit amet nibh.",
      url: FeatureImg6,
    },
  ];
  return (
    <div className="choose-container">
      <h1 className="choose-primary">Why Choose US</h1>
      <p className="choose-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
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
