"use client";
import 'react-toastify/dist/ReactToastify.css';

import {
  Fragment,
  useEffect,
  useState,
} from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import Hero from './components/herosection/Hero';
import Navbar from './components/navbar/Navbar';

// const Hero = dynamic(() => import('./components/herosection/Hero'))
const About = dynamic(() => import('./components/aboutus/About'))
const Cta = dynamic(() => import('./components/cta/Cta'))
const Faq = dynamic(() => import('./components/faq/Faq'))
const Footer = dynamic(() => import('./components/footer/Footer'))
const Services = dynamic(() => import('./components/services/Services'))
const Statistics = dynamic(() => import('./components/statistics/Statistics'))
const Testinomials = dynamic(() => import('./components/testinomials/Testinomials'))
const WhyChooseUs = dynamic(() => import('./components/whychooseus/WhyChooseUs'))
const Contact = dynamic(() => import('./components/contactus/Contact'))


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log({ loading });

    setLoading(false);
  }, []);

  return (
    <>
      <Fragment>
        <main>
          <Head>
            <title>Care Physio Link</title>
            <link rel="canonical" href="https://www.carephysio.in/" />
            <link rel="canonical" href="https://www.carephysio.in/founder" />
          </Head>
          <Navbar />
          <ToastContainer />
          <Hero />
          <About />
          <WhyChooseUs />
          <Statistics />
          <Services />
          <Testinomials />
          <Contact />
          <Cta />
          <Faq />
          <Footer />
        </main>
      </Fragment>
      {/* {!loading ? (
      ) : (
        <Loading />
      )} */}
    </>
  );
}
