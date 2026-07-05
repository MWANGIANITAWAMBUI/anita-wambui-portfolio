
import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-48 md:py-80 bg-[#1a1a1a] text-white">
      <div className="swiss-grid mb-32 md:mb-48 px-4 md:px-0">
        <div className="col-span-12 lg:col-span-3">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-400/60">05 / Highlights</h2>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-8">
            Career <br /> <span className="text-[#ff4d00]">Highlights.</span>
          </h2>
        </div>
      </div>

      <div className="space-y-[1px] bg-zinc-800/20">
        {ACHIEVEMENTS.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'circOut' }}
            viewport={{ once: true }}
            className="group relative bg-[#1a1a1a] hover:bg-zinc-900 transition-all duration-700"
          >
            <div className="swiss-grid py-16 md:py-20 items-center px-4 md:px-0">
              <div className="col-span-12 md:col-span-8">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tighter group-hover:translate-x-4 transition-transform duration-700 ease-in-out mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-400 font-light max-w-2xl">{item.description}</p>
              </div>
              <div className="col-span-12 md:col-span-4 flex justify-start md:justify-end mt-8 md:mt-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:border-[#ff4d00] transition-all duration-700 rotate-0 group-hover:rotate-45">
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
