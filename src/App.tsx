import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesChoice from './components/ServicesChoice';
import ResidentialServices from './components/ResidentialServices';
import CommercialServices from './components/CommercialServices';
import Gallery from './components/Gallery';
import About from './components/About';
import Trust from './components/Trust';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesChoice />
        <ResidentialServices />
        <CommercialServices />
        <Gallery />
        <About />
        <Trust />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
