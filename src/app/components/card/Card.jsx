"use client"; // This is p client component 👈🏽

import "./card.css";

import React, { useRef } from "react";

import Image from "next/image";
import Flippy, { BackSide, FrontSide } from "react-flippy";

const Card = ({ title, description, image }) => {
  const ref = useRef();
  return (
    <>
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={ref} // to use toggle method like ref.curret.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        // style={{ width: "300px" }} /// these are optional style, it is not necessary
        className="flippyContainer"
      >
        <FrontSide className="physiotherapy-card">
          <Image
            src={image}
            alt={title}
            className="card-image"
            // width={50}
            // height={50}
            unoptimized
          />
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <button
              onClick={() => {
                ref.current.toggle();
              }}
              className="readmore-btn"
            >
              {" "}
              Read more
            </button>
          </div>
        </FrontSide>
        <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
      </Flippy>
    </>
  );
};

export default Card;
