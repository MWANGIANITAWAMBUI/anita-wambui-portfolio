import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import ExperienceSection from './components/ExperienceSection';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PROJECTS } from './constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Store the exact handler so we can remove it later
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    // Targeted heading animations for Experience and Contact only
    const experienceHeading = document.querySelector('#experience > .swiss-grid.mb-32');
    const contactHeading = document.querySelector('#contact > .swiss-grid');

    [experienceHeading, contactHeading].forEach((heading) => {
      if (!heading) return;

      gsap.fromTo(
        heading,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[#ff4d00] selection:text-white bg-[#fcfaf7]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <ExperienceSection />

        <section id="work" className="py-24 md:py-48 px-4 md:px-8 xl:px-24">
          <div className="swiss-grid mb-32">
            <div className="col-span-12 lg:col-span-2">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff4d00]">03 / Portfolio</h2>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.8] text-zinc-900">
                Published <br />
                <span
                  className="!opacity-100 block"
                  style={{
                    WebkitTextStroke: '2px #ff4d00',
                    color: 'transparent',
                  }}
                >
                  Projects.
                </span>
              </h2>
            </div>
          </div>

          <div className="flex flex-col border-b border-zinc-200">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </section>

        <TechStack />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;