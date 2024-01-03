"use client";

import "./hero.css";

import React from "react";

import HeroImage from "/public/Content.jpg";
import Customer1 from "/public/customer/customer-1.jpg";
import Customer2 from "/public/customer/customer-2.jpg";
import Customer3 from "/public/customer/customer-3.jpg";
import Customer4 from "/public/customer/customer-4.jpg";
import Customer5 from "/public/customer/customer-5.jpg";
import Customer6 from "/public/customer/customer-6.jpg";
import Image from "next/image";
import Link from "next/link";

("use-client");

// const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
// const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Hero = () => {
  return (
    <div>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Providing Exceptional Physiotherapy Care for All bodies
            </h1>
            <p className="hero-description">
              Discover personalized physiotherapy services designed to relieve
              pain, enhance mobility, and improve overall well-being.
            </p>
            <div className="hero-action-btn">
              <Link href="#contact" className="btn btn--fill margin-right-btn">
                Contact Us
              </Link>
              <Link
                href="/founder"
                className="btn btn--outline margin-right-btn"
              >
                Our Founder &darr;
              </Link>
            </div>
          </div>
          <div className="hero-img-box">
            <Image
              src={HeroImage}
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              className="hero-img"

              // onLoad={() => setIsLoaded(true)}
            />
          </div>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <Image src={Customer1} alt="Customer photo 1" />
              <Image src={Customer2} alt="Customer photo 2" />
              <Image src={Customer3} alt="Customer photo 3" />
              <Image src={Customer4} alt="Customer photo 4" />
              <Image src={Customer5} alt="Customer photo 5" />
              <Image src={Customer6} alt="Customer photo 6" />
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
