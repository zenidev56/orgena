"use client";
import "./faq.css";

import React from "react";

const Faq = () => {
  const faqInfo = [
    {
      question: "What Should I Expect on My First Visit?",
      answer:
        "On your first visit a licensed Physiotherapy  Will go over your medical history and screen your injury/ailment. The physiotherapy will take baseline measurements of your strength, flexibility, and mobility to better determine a personalized plan of care with you. Often a brief treatment will also be provided on the first visit, and a home exercise plan will be developed when appropriate.",
    },
    {
      question:
        "Must you have a referral from your physician to see a physiotherapy?",
      answer:
        "In the overwhelming majority of states you may seek the services of a physiotherapy without a referral. If another health care provider refers you to Physiotherapy , keep in mind that you have the right to choose which physiotherapy you would like to see.",
    },
    {
      question:
        "Isn't physiotherapy only for rehabilitation after surgery or injury?",
      answer:
        "- Not at all. This is one of the greatest misconceptions about physiotherapy. Physiotherapist work in many areas involving overall health and wellness such as injury prevention for workers at their jobsites, athletes preparing for competition, and individuals of all ages who exercise for fitness. In any situation where you need your body to move and function at its best, a physiotherapist can help.",
    },
    {
      question: "How Long Does Each Visit Take?",
      answer:
        "Normally, appointments are usually between 30-40 minutes, but can last up to 60 minutes in certain conditions.",
    },
    {
      question: "Is PhysicTherapy Painful?",
      answer:
        "We at C.A.R.E physiotherapy clinic work with you to remove your pain. Often the goal of physiotherapy is to alleviate discomfort and improve function. Our licensed physiotherapist will continuously check in to monitor your pain during each session to minimize unwarranted discomfort.",
    },
    {
      question: "How Often Will I Come to PhysioTherapy?",
      answer:
        "Each injury is different, and each person's health history is unique. Typically, patients are in physiotherapy from a range of 10 days to 20 days in musculoskeletal conditions or 1-2 months in neurological conditions to regain function and return to their prior activities safely. Depending on severity of the disorder, a patient can expect to be seen 1-3 visits a week in the clinic to regain their function while simultaneously doing a personalized home exercise plan. For example, typical sprain and strains may take 4-6 weeks while post-surgical procedures may take 2-3 months to rehab, your physiotherapy will work with your individual schedule to accommodate a plan that will facilitate healing and independence.",
    },
    {
      question: "How is My Progress Measured?",
      answer:
        "Our physio therapists measure your baseline function at the start of care during your evaluation. Additionally, you will fill out a subjective questionnaire regarding your current function with activities of daily living. During subsequent visits, our doctor  will monitor and assess your progress with activities during treatment sessions and provide regular feedback to you. Midway through your plan of care, the physiotherapy will often re-evaluate your function, update your Physiotherapy  goals, and provide a progress note to your referring physician. At the end of care, your physiotherapy will re-assess your function, check your progress with your activities of daily living, and provide a note to your referring physician with your updated functional status.",
    },
    {
      question: "Will My Insurance Cover Physiotherapy ?",
      answer:
        "Our clinic takes most insurances, but it’s also based on your individual policy so kindly get that clear on the day of your first visit.",
    },
    {
      question: "What If I Don't Have Insurance?",
      answer:
        "For patients that do not have insurance, we offer a discounted self-pay rate, due at the time of service.",
    },
  ];
  return (
    <div id="faq" className="faq-container">
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col">
          <p className="faq-secondary">FAQ</p>
          <h1 className="faq-primary">Popular Question Asked</h1>
          <p className="faq-description">
            We have answers to common questions people ask
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto">
          {faqInfo.map((faq, index) => {
            return (
              <>
                <div className="py-5" key={index}>
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span> {faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-justify">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
