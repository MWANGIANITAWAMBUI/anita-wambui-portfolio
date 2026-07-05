
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO_CONTENT } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animation
      const tl = gsap.timeline();
      tl.from(".hero-line", {
        y: 200,
        opacity: 0,
        duration: 2,
        ease: 'expo.out',
        stagger: 0.1
      })
      .from(subtextRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out'
      }, "-=1.2")
      .from(".corner-glow", {
        opacity: 0,
        scale: 0.8,
        duration: 2.5,
        ease: 'expo.out'
      }, "-=2");

      // 2. Scroll Animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      scrollTl.to(".hero-line", {
        y: (i) => (i + 1) * -120,
        opacity: 0.1,
        scale: 0.9,
        stagger: 0.05,
      });

      // Background parallax
      gsap.to(".hero-bg-accent", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
        y: 300,
        scale: 1.6,
        rotate: 15,
        opacity: 0.15
      });

      // Corner Glow Parallax
      gsap.to(".corner-glow", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
        x: 150,
        y: -150,
        opacity: 0,
        scale: 1.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[110vh] flex flex-col justify-center overflow-hidden pt-32 md:pt-40 pb-20 bg-gradient-to-br from-[#fcfaf7] via-[#f9f7f2] to-[#f2f0eb]"
    >
      {/* Decorative gradient mesh layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Right Corner Glow - Adjusted for mobile */}
        <div className="corner-glow absolute -top-[15%] -right-[20%] md:-right-[10%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] max-w-[1000px] max-h-[1000px] bg-[#ff4d00]/15 rounded-full blur-[160px] mix-blend-multiply z-0"></div>
        
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-[#ff4d00]/5 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-[40%] -right-[10%] md:-right-[5%] w-[60%] h-[60%] md:w-[50%] md:h-[50%] bg-[#ff4d00]/5 rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="swiss-grid relative z-10 px-4 md:px-0">
        <div className="col-span-12 overflow-hidden">
          <h1 className="text-[11vw] md:text-[10vw] lg:text-[9vw] font-black leading-[0.8] md:leading-[0.75] tracking-tighter uppercase text-zinc-900">
            <div className="hero-line block overflow-hidden py-1">Anita Wambui</div>
            <div className="hero-line block text-[#ff4d00] overflow-hidden py-1 md:py-2 text-[11vw] md:text-[10vw] lg:text-[9vw]">
              Software
            </div>
            <div className="hero-line block text-[#ff4d00] overflow-hidden py-1 md:py-2 text-[11vw] md:text-[10vw] lg:text-[9vw]">
              Engineer
            </div>
          </h1>
        </div>
        
        <div className="col-span-12 lg:col-span-7 lg:col-start-6 mt-12 md:mt-24">
          <div ref={subtextRef} className="space-y-8 md:space-y-12">
            <p className="text-lg md:text-3xl font-light leading-relaxed text-zinc-600 max-w-2xl border-l-[6px] md:border-l-[12px] border-[#ff4d00] pl-6 md:pl-10">
              {HERO_CONTENT}
            </p>
            <div className="flex items-center gap-4 md:gap-6 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-zinc-400">
              <span className="w-16 md:w-24 h-[2px] bg-[#ff4d00]"></span>
              Crafting Digital Excellence
            </div>
            <a
              href="/Anita_Wambui_Mwangi_CV.pdf"
              download
              className="inline-flex items-center gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white bg-zinc-900 hover:bg-[#ff4d00] transition-colors duration-500 px-6 py-4 md:px-8 md:py-5 rounded-sm"
            >
              Download Résumé
            </a>
          </div>
        </div>
      </div>

      <div className="hero-bg-accent absolute top-[15%] right-[-20%] md:right-[-10%] -z-10 opacity-20 pointer-events-none overflow-hidden">
          <div className="w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-[#ff4d00] to-orange-300 rounded-full blur-[200px]"></div>
      </div>
    </section>
  );
};

export default Hero;
