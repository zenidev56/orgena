"use client";

import "./hero.css";

import React, { useState } from "react";

import HeroImage from "/public/Content.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

("use-client");

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
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
              <Link href="#contact" className="btn btn--fill margin-right-btn">
                Get Help
              </Link>
              <Link
                href="/founder"
                className="btn btn--outline margin-right-btn"
              >
                Learn more &darr;
              </Link>
            </div>
          </div>
          <div className="hero-img-box">
            <motion.div
              initial={false}
              animate={
                isLoaded && isInView
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
            >
              <Image
                src={HeroImage}
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                className="hero-img"
                onLoad={() => setIsLoaded(true)}
              />
            </motion.div>
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
