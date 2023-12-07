"use client"; // This is p client component 👈🏽

import "./card.css";

import React, { useRef } from "react";

import { Card } from "flowbite-react";
import Image from "next/image";
import Flippy, { BackSide, FrontSide } from "react-flippy";

const CardComponent = ({ title, description, image }) => {
  const ref = useRef();
  return (
    <>
      <Flippy
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
                Definition:
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
              But underlying conditions such as diabetes, shoulder trauma ,
              surgery, inflammatory disease may add on to the condition
            </p>
            <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              Symptoms:
            </span>{" "}
            <ul className="my-1 space-y-5">
              <li className="flex space-x-3">
                {/* <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg> */}
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blak"
                  viewBox="0 0 10 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Severe pain while doing shoulder movement
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blak"
                  viewBox="0 0 10 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Stiffness
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blak"
                  viewBox="0 0 10 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Unable to take hand to back pocket
                </span>
              </li>
              <li className="flex space-x-3 decoration-gray-500">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blak"
                  viewBox="0 0 10 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  Comb Hair
                </span>
              </li>
            </ul>
          </Card>
        </BackSide>
      </Flippy>
    </>
  );
};

export default CardComponent;
