import "./flippablecard.css";

import { useState } from "react";

import { CSSTransition } from "react-transition-group";

import SimpleCard from "./card/SimpleCard";

function FlippableCard({ title, image, description, condition, symptons }) {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <SimpleCard
          onClick={() => {
            setShowFront((v) => !v);
          }}
          title={title}
          image={image}
          description={description}
          condition={condition}
          symptons={symptons}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
