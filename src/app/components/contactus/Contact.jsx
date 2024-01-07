"use client";
import "./contact.css";

import React, { useState } from "react";

import { toast } from "react-toastify";

import Location from "../location/Location";
import Map from "../map/Map";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    condition: "",
    treatment: "",
    message: "",
  });
  const [disableButton, setDisableButton] = useState(false);
  const handleChange = (event) => {
    event.preventDefault();
    setContactForm({ ...contactForm, [event.target.id]: event.target.value });
  };
  console.log({ disableButton });
  const onSubmit = async (e) => {
    setDisableButton(true);
    try {
      console.log({ disableButton });
      e.preventDefault();
      const { name, email, condition, treatment, message, phone } = contactForm;
      if (!name || !email || !phone) {
        toast.error("Please add name, email and phone number");
      }
      await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          condition,
          treatment,
          message,
          phone,
        }),
      });
      toast.success("Message sent successfully.");
      setContactForm({
        name: "",
        email: "",
        condition: "",
        treatment: "",
        message: "",
        phone: "",
      });
      setDisableButton(false);
    } catch (error) {
      console.log(error);
      setDisableButton(false);
    }
  };
  const conditions = [
    "Neck Pain",
    "Sports injuries",
    "Vertigo",
    "Foot fracture",
    "Sprained ankle",
    "Arthritis",
    "Back pain",
    "Muscular dystrophy",
    "Osteoporosis",
    "Sciatica",
    "Cerebral palsy",
    "Chronic pain",
    "Achilles tendinopathy",
    "Concussion",
  ];
  const treatments = [
    "Electrical stimulation",
    "Ultrasound",
    "Manual therapy",
    "Laser",
    "Physiotherapy",
    "Electrotherapy",
    "Cardiopulmonary",
  ];
  return (
    <div id="contact">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6  mx-auto">
          <div>
            <p className="contact-secondary">Contact us</p>

            <h1 className="contact-primary">Chat to our friendly team</h1>

            <p className="contact-description">
              We’d love to hear from you. Please fill out this form or shoot us
              an email.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Julie Pawar"
                      value={contactForm.name}
                      onChange={handleChange}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    value={contactForm.phone}
                    onChange={handleChange}
                    placeholder="91+ 000000 0000"
                    pattern="[1-9]{1}[0-9]{9}"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-4 max-w-md ">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    What&apos;s your Condition
                  </label>
                  <select
                    value={contactForm.condition}
                    onChange={handleChange}
                    id="condition"
                    name="condition"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Select your Condition"
                  >
                    {conditions.map((condition, index) => {
                      return (
                        <>
                          <option
                            key={index + condition}
                            // className="condition-option block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            id={condition}
                          >
                            {condition}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div className="mt-4 max-w-md ">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Select&apos;s your Treatment
                  </label>
                  <select
                    value={contactForm.treatment}
                    onChange={handleChange}
                    id="treatment"
                    name="treatment"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Select's  your Treatment"
                  >
                    {treatments.map((treatment, index) => {
                      return (
                        <>
                          <option
                            key={index + treatment}
                            // className="condition-option block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            id={treatment}
                          >
                            {treatment}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={handleChange}
                    id="message"
                    name="message"
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  onClick={onSubmit}
                  className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  disabled={disableButton}
                >
                  Send message
                </button>
              </form>
            </div>
            {/* <div className="h-[35vh] w-[100%] mb-10" relative>
              <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto mb-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.605940871361!2d72.8672994!3d19.299495399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b11db7a616e7%3A0xbc4a8bdde26f0f2c!2sC.A.R.E%20Physiotherapy%20Clinic%20-%20Dr%20Julie%20Pawar%20(Physiotherapist)!5e0!3m2!1sen!2sin!4v1702400881563!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div> */}
            <Map />
          </div>
        </div>
      </section>
      <Location />
    </div>
  );
};

export default Contact;
