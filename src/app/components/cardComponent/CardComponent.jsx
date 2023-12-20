"use client"; // This is p client component 👈🏽

import "./card.css";

import React, { useRef, useState } from "react";

import { Card } from "flowbite-react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";

const CardComponent = ({ title, description, image, symptons, condition }) => {
  const ref = useRef();
  const conditionsInfo = [
    {
      title: "Frozen Shoulder",
      description:
        "Frozen shoulder, also known as adhesive capsulitis, is a condition that limits movement in the shoulder joint.",
      condition:
        "Cause is unknown, But underlying conditions such as diabetes, shoulder trauma , surgery, inflammatory disease may add on to the condition ",
      symptons: [
        "Severe pain while doing shoulder movement",
        "Stiffness",
        "Unable to take hand to back pocket",
        "Comb hair",
      ],
    },
    {
      title: "Ankylosing Spondylitis",
      description:
        "Ankylosing Spondylitis - chronic inflammatory condition involving the spine & sacroiliac joint ",
      condition: "",
      symptons: ["", "", "", ""],
    },
    {
      title: "",
      description: "",
      condition: "",
      symptons: ["", "", "", ""],
    },
    {
      title: "",
      description: "",
      condition: "",
      symptons: ["", "", "", ""],
    },
    {
      title: "",
      description: "",
      condition: "",
      symptons: ["", "", "", ""],
    },
    {
      title: "",
      description: "",
      condition: "",
      symptons: ["", "", "", ""],
    },
    {
      title: "",
      description: "",
      condition: "",
      symptons: ["", "", "", ""],
    },
    {
      title: "",
      description: "",
      condition: "",
      symptons: ["", "", "", ""],
    },
    {
      title: "",
      description: "",
      condition: "",
      symptons: ["", "", "", ""],
    },
    {
      title: "",
      description: "",
      condition: "",
      symptons: ["", "", "", ""],
    },
  ];
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  return (
    <>
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={handleClick}>
        <Card
            className="max-w-sm"
            renderImage={() => (
              <Image width={500} height={500} src={image} alt="image 1" />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                Why it hurts:
              </span>{" "}
              {description}
            </p>
          </Card>
        </div>

        <div onClick={handleClick}>
        <Card className="max-w-sm gap-0">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                Conditions:
              </span>{" "}
              {condition}
            </p>
            <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              Symptoms:
            </span>{" "}
            <ul className="my-1 space-y-5">
              {symptons.map((sympton, index) => {
                return (
                  <li className="flex space-x-3" key={index}>
                      <svg
                        className="w-8 h-8 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 10 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"
                        />
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {sympton}
                      </span>
                    </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </ReactCardFlip>
      {/* <Card
            className="max-w-sm"
            renderImage={() => (
              <Image width={500} height={500} src={image} alt="image 1" />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                Why it hurts:
              </span>{" "}
              {description}
            </p>
          </Card> */}
      {/* <Flippy
        flipOnHover={true} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={ref} // to use toggle method like ref.curret.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        // style={{ width: "300px" }} /// these are optional style, it is not necessary
        // className="flippyContainer"
      >
        <FrontSide>
          <Card
            className="max-w-sm"
            renderImage={() => (
              <Image width={500} height={500} src={image} alt="image 1" />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                Why it hurts:
              </span>{" "}
              {description}
            </p>
          </Card>
        </FrontSide>
        <BackSide>
          <Card className="max-w-sm gap-0">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                Conditions:
              </span>{" "}
              {condition}
            </p>
            <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              Symptoms:
            </span>{" "}
            <ul className="my-1 space-y-5">
              {symptons.map((sympton, index) => {
                return (
                  <li className="flex space-x-3" key={index}>
                      <svg
                        className="w-8 h-8 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 10 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"
                        />
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {sympton}
                      </span>
                    </li>
                );
              })}
            </ul>
          </Card>
        </BackSide>
      </Flippy> */}
    </>
  );
};

export default CardComponent;
