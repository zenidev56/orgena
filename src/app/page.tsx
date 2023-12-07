"use client"
import { ParallaxProvider } from 'react-scroll-parallax';

import About from './components/aboutus/About';
import ContactSection from './components/contactsection/ContactSection';
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
      <Services />
      <Testinomials />
      <ParallaxProvider scrollAxis='vertical'>
        <ContactSection />

      </ParallaxProvider>
    </main>
  )
}
