import React from "react";

import FounderImg from "/public/founder.jpg";
import Head from "next/head";
import Image from "next/image";

import Cta from "../components/cta/Cta";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Statistics from "../components/statistics/Statistics";

export const metadata = {
  title: "Care Physio Founder - DR Julie Pawar",
  description: `Graduated from Maharashtra University of Health Sciences,
    Nashik Is been serving the health care sector since the year
    2019 to present , has worked in renowned hospitals such as
    Saifee Hospital - Bombay , BARC - Chembur , and also has 3
    years of independent work experience in a clinic based setup ,
    Has successfully handled Post Covid cases during the first &
    second phase of covid , Uses various techniques such as
    manipulation, taping, needling, MFR other than the basic
    maneuver for faster and better recovery of Patients , known
    for her happy nature & good patient handling skills`,
  icons: {
    icon: "/public/favicons.ico", // /public path
  },
};

const Founder = () => {
  return (
    <div>
      <Head>
        <title>Care Physio Founder - DR Julie Pawar</title>
        <meta
          name="description"
          content="Learn more about Care Physio and our commitment to holistic healing through personalized physiotherapy services."
        />
        <link rel="canonical" href="https://www.carephysio.in/founder" />
      </Head>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="relative flex">
          <div className=" lg:w-1/3"></div>
          <div className="hidden w-3/4 bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div className="container flex flex-col justify-center w-full px-6 py-1 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Our <span className="text-blue-500">Founder&apos;s</span> <br />
              {/* saying */}
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
              <Image
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                src={FounderImg}
                alt="Founder Image"
              />

              <div className="mt-8 lg:px-10 lg:mt-0">
                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                  “ Graduated from Maharashtra University of Health Sciences,
                  Nashik Is been serving the health care sector since the year
                  2019 to present , has worked in renowned hospitals such as
                  Saifee Hospital - Bombay , BARC - Chembur , and also has 3
                  years of independent work experience in a clinic based setup ,
                  Has successfully handled Post Covid cases during the first &
                  second phase of covid , Uses various techniques such as
                  manipulation, taping, needling, MFR other than the basic
                  maneuver for faster and better recovery of Patients , known
                  for her happy nature & good patient handling skills ”
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">
                  DR Julie Pawar
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Physiotherapists (M.I.A.P , CKTP ,C.M.T )
                </p>
              </div>
            </div>
          </div>
        </div>
        <Statistics />
        <div className="container px-6 py-1 mx-auto">
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Contact Info
          </h1>
          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                hello@merakiui.com
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Office
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Come say hello at our office HQ.
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Phone
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                +1 (555) 000-0000
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      {/* <ContactHero /> */}
      <Footer />
    </div>
  );
};

export default Founder;
