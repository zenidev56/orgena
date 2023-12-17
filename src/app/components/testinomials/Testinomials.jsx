import "./testinomial.css";

import React from "react";

import Profile from "/public/profile.jpg";
import { Avatar, Carousel } from "flowbite-react";
import Image from "next/image";

const Testinomials = () => {
  return (
    <div>
      <div className="sm:h-64 xl:h-80 2xl:h-96 flex justify-center flex-col items-left testinomial-container mx-4	">
        <h4 className="testinomial-secondary">WHAT HAPPY CLIENTS SAY</h4>
        <h2 className="testinomial-primary"> Testinomials</h2>
        <p className="testinomial-description">
          Understanding your requirements and objectives is important to us. We
          listen and work together to create a truly unique and unforgettable
          experience.
        </p>

        <Carousel
          pauseOnHover
          indicators={false}
          className="carosel-container"
          leftControl={
            <div className="p-1 border rounded-full  bg-slate-300	items-center">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                />
              </svg>
            </div>
          }
          rightControl={
            <div className="p-1 border rounded-full  bg-slate-300	">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </div>
          }
        >
          <div className="flex justify-center flex-col items-center">
            <Avatar
              img={(props) => (
                <Image
                  alt=""
                  //   height="100"
                  referrerPolicy="no-referrer"
                  src={Profile}
                  //   width="100"
                  {...props}
                />
              )}
              rounded
              size="lg"
              color="light"
              className="mb-2"
            />
            <p className="testinomial mb-2 font-bold">
              David is a well-established psychologist and delivers a very
              professional service. As a skilled therapist David brings not only
              depth, warmth and wisdom to his practice, he also has a sense of
              humour and charm, that invites trust and ease to his clients. I
              highly recommend David to any individual or organization in need
              of quality service.
            </p>
            <h4 className="mb-1">Ashwin Kuzikattu</h4>
            <div className="flex">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
          <div className="flex justify-center flex-col items-center">
            <Avatar
              img={(props) => (
                <Image
                  alt=""
                  //   height="100"
                  referrerPolicy="no-referrer"
                  src={Profile}
                  //   width="100"
                  {...props}
                />
              )}
              rounded
              size="lg"
              color="light"
              className="mb-2"
            />
            <p className="testinomial mb-2 font-bold">
              David is a well-established psychologist and delivers a very
              professional service. As a skilled therapist David brings not only
              depth, warmth and wisdom to his practice, he also has a sense of
              humour and charm, that invites trust and ease to his clients. I
              highly recommend David to any individual or organization in need
              of quality service.
            </p>
            <h4 className="mb-1">Hitesh Pal</h4>
            <div className="flex">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
          <div className="flex justify-center flex-col items-center">
            <Avatar
              img={(props) => (
                <Image
                  alt=""
                  //   height="100"
                  referrerPolicy="no-referrer"
                  src={Profile}
                  //   width="100"
                  {...props}
                />
              )}
              rounded
              size="lg"
              color="light"
              className="mb-2"
            />
            <p className="testinomial mb-2 font-bold">
              David is a well-established psychologist and delivers a very
              professional service. As a skilled therapist David brings not only
              depth, warmth and wisdom to his practice, he also has a sense of
              humour and charm, that invites trust and ease to his clients. I
              highly recommend David to any individual or organization in need
              of quality service.
            </p>
            <h4 className="mb-1">Ayush Yadav</h4>
            <div className="flex">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testinomials;
