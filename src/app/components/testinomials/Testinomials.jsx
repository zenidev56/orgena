"use client";
import "./testinomial.css";

import React from "react";

import { Avatar, Carousel } from "flowbite-react";
import Image from "next/image";

import NishitaProfile from "../../../../public/nishita-profile.jpg";
import AshishProfile from "../../../../public/profile2.png";
import SnehaProfile from "../../../../public/sneha-profile.jpg";
import VictoriaProfile from "../../../../public/victoria-profile.jpg";
import ZoyaProfile from "../../../../public/zoya-profile.jpeg";

const Testinomials = () => {
  const testinomials = [
    {
      description:
        "I have experienced very good session.And Dr Julie was very excellent in all the manner.Almost my pain has gone.So a very thanks to Dr Julie.I wish all the best to ehr in future and god bless her.",
      name: "Zoya Warsi",
      img: ZoyaProfile,
    },
    {
      description:
        "One of the best physiotherapist I've ever met. Perfect diagnosis. And excellent treatment. With her treatment my long term back and neck pain  But with her diagnosis and treatment now I can walk, run and do all the other activities. Highly recommended. ✌💯💐",
      name: "Ashish Mishra",
      img: AshishProfile,
    },
    {
      description:
        "I was suffering from bells pulsy from last 15 days..i came to to dr. Vigils clinic...Dr. Julie did a great job with my health issue. She explained everything to me in a very clear manner....she recover me in just a 15 days.... She was also kind and friendly. It was a great experience...I am happy with my treatmemt",
      name: "Sneha Khedekar",
      img: SnehaProfile,
    },
    {
      description:
        "I have observed her, she has some unique qualities while treating her patients. She gets to know the details of patient, her history of physical problems and medicines, etc and slowly starts to examining the area of physiotherapy to be undertaken. She talks to patients politely and starts her job of movements/mobility of the affected area so that patients doesn't feel pain.",
      name: "Victoria Nadar",
      img: VictoriaProfile,
    },
    {
      description:
        "Dr. Julie is amazing in her field, she is so calm and polite she listens to each and every detail and acts accordingly My grandmother was diagnosed with bilateral pneumonia and the doctors had given up on her She was on oxygen and bipap and was loosing hope Dr. Julie was a lifesaver she listened to all of her problems was always pushing her to do just a bit more, helped her gain her confidence back and finally she's doing so much better. She is a balance of being fun and relaxed while being strict at times. Will always be grateful to her.",
      name: "Nishita Verma",
      img: NishitaProfile,
    },
  ];
  return (
    <div id="testimonials">
      <div className="sm:h-64 xl:h-80 2xl:h-96 flex justify-center flex-col items-left testinomial-container	">
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
          {testinomials.map((testinomial, index) => {
            return (
              <>
                <div
                  className="flex justify-center flex-col items-center"
                  key={index}
                >
                  <Avatar
                    img={(props) => (
                      <Image
                        alt=""
                        //   height="100"
                        referrerPolicy="no-referrer"
                        src={testinomial.img}
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
                    {testinomial.description}
                  </p>
                  <h4 className="mb-1">{testinomial.name}</h4>
                  <div className="flex">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testinomials;
