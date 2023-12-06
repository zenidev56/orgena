import About from './components/aboutus/About';
import Hero from './components/herosection/Hero';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </main>
  )
}
