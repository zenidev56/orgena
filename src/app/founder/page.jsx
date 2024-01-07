import React from "react";

import FounderImg from "/public/founder.jpg";
import Head from "next/head";
import Image from "next/image";

import Cta from "../components/cta/Cta";
import Footer from "../components/footer/Footer";
import Location from "../components/location/Location";
import Map from "../components/map/Map";
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
          <div className=""></div>
          <div className="hidden w-3/4 bg-gray-100 dark:bg-gray-800 "></div>

          <div className="container flex flex-col justify-center w-full px-6 py-1 mx-auto ">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize  dark:text-white">
              Our <span className="text-blue-500">Founder&apos;s</span> <br />
              {/* saying */}
            </h1>

            <div className="mt-10 ">
              <Image
                className="object-cover object-center w-full  rounded-lg h-96 lg:h-3/4"
                src={FounderImg}
                alt="Founder Image"
              />

              <div className="mt-8 lg:items-center">
                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 lg:max-w-fit text-justify">
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
        <Cta />
        <Location />
        <div className="mb-28 lg:mb-36 p-5">
          <Map />
        </div>
      </section>
      {/* <ContactHero /> */}
      <Footer />
    </div>
  );
};

export default Founder;
