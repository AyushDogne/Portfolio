import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import ScrollTop from './components/ScrollTop';
import Preloader from './components/Preloader';
import ResumePopup from './components/Resume';
import AOS from 'aos';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="App">
      <Preloader />
      <Header onResumeClick={openResume} />

      <ResumePopup isOpen={isResumeOpen} onClose={closeResume} />

      <main className="main">
        <Hero />
        <About />
        <Testimonials />
        <Portfolio />
        <Skills />
        <Services />
        <Contact />
      </main>

      <ScrollTop />
    </div>
  );
}

export default App;
