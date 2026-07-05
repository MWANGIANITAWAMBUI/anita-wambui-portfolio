
import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT, ABOUT_MILESTONES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-64 md:py-80 bg-[#ff4d00] text-white overflow-hidden">
      <div className="swiss-grid">
        <div className="col-span-12 lg:col-span-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] opacity-50 sticky top-48">01 / Biography</h2>
        </div>
        
        <div className="col-span-12 lg:col-span-10">
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter mb-24 md:mb-40 uppercase"
          >
            From intern <br /> to <span className="opacity-40 italic">production engineer.</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start">
            {/* Biography Text Section - Expanded to fill more space since image is removed */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-8"
            >
              <p className="text-2xl md:text-4xl font-light leading-relaxed opacity-90 mb-12">
                {ABOUT_TEXT}
              </p>
            </motion.div>
            
            {/* Journey Section */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-4 space-y-12"
            >
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] opacity-60">The Journey</h3>
              <ul className="flex flex-col gap-y-5 text-sm md:text-base font-bold uppercase tracking-widest leading-snug">
                {ABOUT_MILESTONES.map((milestone) => (
                  <li key={milestone} className="flex items-start gap-4 group transition-transform hover:translate-x-2">
                    <span className="w-2 h-2 mt-2 bg-white rotate-45 shrink-0"></span>
                    <span>{milestone}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
