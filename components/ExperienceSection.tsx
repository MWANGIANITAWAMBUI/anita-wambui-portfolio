
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-28 md:py-32 bg-white overflow-hidden">
      <div className="swiss-grid mb-32 px-4 md:px-0">
        <div className="col-span-12 lg:col-span-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff4d00]">02 / Professional</h2>
        </div>
        <div className="col-span-12 lg:col-span-10">
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.8] text-zinc-900">
              Experience <br />
              <span
                className="!opacity-100 block"
                style={{
                  WebkitTextStroke: '2px #ff4d00',
                  color: 'transparent'
                }}
              >
                Timeline.
              </span>
            </h2>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-4 md:px-0">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group border border-zinc-100 bg-white py-12 md:py-24 px-4 md:px-16 shadow-xl shadow-zinc-200/20 hover:shadow-2xl hover:shadow-[#ff4d00]/10 hover:border-[#ff4d00]/20 transition-all duration-700 relative overflow-hidden rounded-sm"
          >
            {/* Highly visible background number - scaled for mobile */}
            <div className="absolute -bottom-6 md:-bottom-10 -right-2 md:-right-4 text-[8rem] md:text-[15rem] font-black text-zinc-50 group-hover:text-[#ff4d00]/5 transition-colors duration-700 pointer-events-none select-none italic">
              0{idx + 1}
            </div>

            <div className="swiss-grid items-start relative z-10">
              <div className="col-span-12 lg:col-span-3">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl md:text-4xl font-black text-[#ff4d00]/20 group-hover:text-[#ff4d00] transition-colors duration-500">0{idx + 1}.</span>
                    <span className="text-lg md:text-xl font-black text-zinc-900 tracking-tighter">{exp.year}</span>
                  </div>
                  <div className="w-12 h-1 bg-[#ff4d00] opacity-30"></div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
                <div className="max-w-4xl">
                  <h3 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 group-hover:text-[#ff4d00] transition-colors duration-500">{exp.role}</h3>
                  <h4 className="text-lg md:text-xl font-bold text-zinc-400 mb-6 md:mb-8 uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#ff4d00] rounded-full"></span>
                    {exp.company}
                  </h4>
                  <p className="text-base md:text-2xl text-zinc-500 font-light leading-relaxed mb-8 md:mb-12">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map(t => (
                      <span key={t} className="text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 border border-zinc-200 bg-zinc-50/50 group-hover:border-[#ff4d00] group-hover:bg-white group-hover:text-[#ff4d00] transition-all duration-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
