"use client"
import { ParallaxProvider } from 'react-scroll-parallax';

import About from './components/aboutus/About';
import ContactHero from './components/contactHero/ContactHero';
import Contact from './components/contactus/Contact';
import Cta from './components/cta/Cta';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import Hero from './components/herosection/Hero';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Testinomials from './components/testinomials/Testinomials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ContactHero />
      <Services />
      <Testinomials />
      <Contact />
      <ParallaxProvider scrollAxis='vertical'>
        {/* <ContactSection /> */}
        <Cta />
        <Faq />
      <Footer />
      </ParallaxProvider>
    </main>
  )
}
