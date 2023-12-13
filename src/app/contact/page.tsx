import ContactHero from '../components/contactHero/ContactHero';
import Contact from '../components/contactus/Contact';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

export default function Page() {
    return <div>
           <Navbar />
           <ContactHero />
           <Contact />
           <Footer />
    </div>;
  }