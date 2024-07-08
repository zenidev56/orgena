"use client";
import "./services.css";

import React, { Fragment } from "react";

import AnkyImg from "/public/ankylosing-spondylitis.jpg";
import BellPalsyImg from "/public/bells-palsy.jpg";
import CarpelImg from "/public/carpal tunnel.jpg";
import FrozenShoulderImg from "/public/frozen-shoulder.jpg";
import { Card } from "flowbite-react";

import FlippableCard from "../flippablecard/FlippableCard";

const Services = () => {
  const conditions = [
    {
      title:
        "Ankylosing Spondylitis: Unraveling the Mystery of a Stiffened Spine",
      description:
        " Ankylosing spondylitis is a chronic inflammatory condition that primarily attacks the spine and sacroiliac joints, causing pain, stiffness, and eventually, reduced mobility.",
      condition:
        "Imagine your spine, normally flexible and dynamic, becoming progressively inflamed and rigid. That's the essence of ankylosing spondylitis.",
      symptoms: [
        "Lower back pain and stiffness, especially in the mornings or after periods of inactivity",
        "Pain and stiffness that spreads to the hips, buttocks, and neck",
        "Burning or radiating pain in the legs and feet",
        "Shallow breathing due to restricted rib cage movement",
      ],
      image: AnkyImg,
    },
    {
      title: "Bell's Palsy: Unmasking the Mystery of a Drooping Face",
      description:
        "Bell's palsy, a sudden and often temporary facial paralysis, can leave one side of your face feeling like a stranger. Weakness of facial muscles is the hallmark symptom, impacting everything from smiling to blinking.",
      condition:
        "Imagine a nerve, responsible for controlling your facial expressions, suddenly becoming swollen or inflamed. This is the culprit behind Bell's palsy.",
      symptoms: [
        "Drooping eyelid the affected side struggles to close fully, leaving the eye exposed and vulnerable.",
        "Loss of taste on the affected side can make even your favorite foods bland.Asymmetrical smiles  your grin becomes lopsided, with one side drooping due to muscle weakness.",
        "Drooling difficulty controlling saliva on the affected side leads to drooling.",
      ],
      image: BellPalsyImg,
    },
    {
      title: "Carpal Tunnel Syndrome: Unmasking the Tingling in Your Fingers",
      description:
        "Carpal tunnel syndrome, a common condition affecting millions, arises from a compressed median nerve in the wrist. This compression leads to a cascade of unpleasant symptoms, making everyday tasks feel like a chore.",
      condition:
        "Imagine a narrow passageway called the carpal tunnel, housing tendons and the median nerve. When inflammation, trauma, or repetitive strain causes tissues in this tunnel to swell, the median nerve gets squeezed.",
      symptoms: [
        "Aching, throbbing, or sharp pains, often starting in the palm and radiating up the forearm.",
        "Loss of feeling, particularly in the thumb, index, and middle fingers. You might feel like you're wearing invisible gloves.",
        " Pins-and-needles or burning prickles, often worse at night and interfering with sleep.",
        // "Difficulty grasping objects, buttoning clothes, or performing fine motor tasks due to weakened muscles.",
      ],
      image: CarpelImg,
    },
    {
      title: " Frozen Shoulder: When Your Move Becomes Unfrozen",
      description:
        "Frozen shoulder, a puzzling condition, locks your shoulder in a painful embrace of stiffness. Movement becomes limited, and everyday tasks like reaching behind or styling your hair feel like distant memories. While the exact cause remains a mystery, diabetes, injuries, and surgery can sometimes play a role in this unwelcome guest's arrival.",
      condition:
        "Frozen shoulder, also known as peri-arthritis or adhesive capsulitis, manifests as: Aching, searing pain, Restricted mobility and Limited range of motion",
      symptoms: [
        "Pain: The dominant symptom, a constant ache that worsens with movement and haunts you at night.",
        "Stiffness: A feeling of immobility, like your shoulder joint is encased in cement.",
        "Reduced range of motion: Everyday tasks like raising your arm, reaching behind your back, or styling your hair become increasingly difficult.",
        // "Muscle weakness: Over time, underused muscles surrounding the shoulder can weaken, further limiting your movement.",
      ],
      image: FrozenShoulderImg,
    },
  ];
  const extraConditions = [
    "Coccydynia",
    "Guillain Barre Syndrome (GBS)",
    "Osteoarthritis",
    "Osteoporosis",
    "Parkinson",
    " Plantar fasciitis",
    "Rheumatoid arthritis",
    "Spondylolisthesis",
    "Spinal canal stenosis",
    "Spondylosis",
    "Tennis elbow",
    "Stroke - paralysis",
    "Trigger finger",
  ];
  return (
    <div id="services" className="services-container">
      <div className="services-heading">
        <h1 className="service-primary">Conditions we treat</h1>
        <p className="service-description">
          We provide comprehensive physiotherapy and chiropractic services for
          men and women.
        </p>
      </div>
      <div className="services-cards">
        {conditions.map((info, index) => {
          const { title, description, image, condition, symptoms = [] } = info;
          console.log({ title, description, image, condition, symptoms });
          return (
            <Fragment key={index}>
              <FlippableCard
                title={title}
                description={description}
                image={image}
                condition={condition}
                symptons={symptoms}
              />
            </Fragment>
          );
        })}
      </div>
      {/* <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Other Conditions we Treat
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
            Why it hurts:
          </span>{" "}
        </p>
      </Card> */}
      <Card width="300px" className="m-auto w-[100%] max-w-[400px]">
        <p className="text-center text-xl font-medium ">
          Other Condition we treat
        </p>
        <div className="flex flex-col justify-center items-center mb-6">
          <ol className="text-left">
            {extraConditions.map((condition) => {
              return (
                <>
                  <li className="font-normal text-gray-700 dark:text-gray-400 flex justify-start items-center mb-2">
                    <span className="w-[15px] h-[15px] mr-4 ">
                      <svg
                        class="w-4 h-4 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 8 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                        />
                      </svg>
                    </span>
                    {condition}
                  </li>
                </>
              );
            })}
          </ol>
        </div>
      </Card>
      <p className="service-extra mt-2">
        We support people at all stages of life to recover from injury, reduce
        pain and stiffness, increase mobility and movement and maximise function
        and quality of life
      </p>
    </div>
  );
};

export default Services;
