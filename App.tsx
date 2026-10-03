import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceSection from './components/ExperienceSection';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <a
        href="#work"
        className="sr-only z-[60] rounded-lg bg-accent px-4 py-2 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to work
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <CaseStudies />
        <TechStack />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
