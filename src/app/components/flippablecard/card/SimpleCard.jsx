import "./card.css";
import "./flip-transition.css";

import { Card } from "flowbite-react";
import Image from "next/image";

function SimpleCard({
  onClick,
  title,
  image,
  description,
  condition,
  symptons,
}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
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
                  <span className="w-[20px] h-[20px] ">
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
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
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    {sympton}
                  </span>
                </li>
              );
            })}
          </ul>ß
        </Card>
      </div>
      <div className="card-front">
        <Card
          className="max-w-sm"
          renderImage={() => (
            <Image  width={500} height={"250px"} src={image} alt="image 1" />
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
    </div>
  );
}

export default SimpleCard;
