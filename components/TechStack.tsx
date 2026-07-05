
import React from 'react';
import { motion } from 'framer-motion';
import { TECH_CATEGORIES } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section id="skills" className="py-28 md:py-40 bg-[#fcfaf7] overflow-hidden">
      <div className="swiss-grid mb-24 md:mb-32 px-4 md:px-0">
        <div className="col-span-12 lg:col-span-2">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff4d00]">04 / Toolkit</h2>
        </div>
        <div className="col-span-12 lg:col-span-10">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-zinc-900">
            Technologies <br />
            <span
              className="!opacity-100 block"
              style={{ WebkitTextStroke: '2px #ff4d00', color: 'transparent' }}
            >
              I Work With.
            </span>
          </h2>
        </div>
      </div>

      <div className="swiss-grid px-4 md:px-0">
        {TECH_CATEGORIES.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 lg:col-span-3 border-t-2 border-zinc-900 pt-8"
          >
            <h3 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-zinc-900 mb-6">
              {group.category}
            </h3>
            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-[#ff4d00] transition-colors duration-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
